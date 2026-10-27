"use client";

import { AnimatePresence, motion } from "framer-motion";
import { type PointerEvent, useEffect, useState } from "react";

import styles from "./pageMotion.module.css";
import { useHydratedReducedMotion } from "./useHydratedReducedMotion";
import { usePortfolioTheme } from "./portfolioThemeContext";

const easeOutCubic = (progress: number) => 1 - (1 - progress) ** 3;

const revealDirections = ["left", "bottom", "right", "top", "bottom", "left"];
const loaderDuration = 1040;

function PageMotion() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const reducedMotion = useHydratedReducedMotion();
  const theme = usePortfolioTheme();

  useEffect(() => {
    setLoading(true);
    const timer = window.setTimeout(() => setLoading(false), reducedMotion ? 240 : loaderDuration);
    return () => window.clearTimeout(timer);
  }, [theme, reducedMotion]);

  useEffect(() => {
    const root = document.documentElement;
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section-reveal]"),
    );
    const revealTimers: number[] = [];

    root.classList.add("motion-ready");
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    const pageMotionStart = performance.now();

    const revealSection = (section: HTMLElement) => {
      section.dataset.revealState = "visible";
      const revealItems = Array.from(
        section.querySelectorAll<HTMLElement>("[data-reveal-item]"),
      );

      revealItems.forEach((item, index) => {
        const delay = Math.min(index, 10) * 90 + 1160;
        const timer = window.setTimeout(() => {
          item.dataset.revealComplete = "true";
        }, delay);
        revealTimers.push(timer);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const section = entry.target as HTMLElement;
          const delayForLoader =
            section.hasAttribute("data-hero-reveal") && !reducedMotion
              ? Math.max(
                  0,
                  loaderDuration - (performance.now() - pageMotionStart),
                )
              : 0;

          if (delayForLoader > 0) {
            const timer = window.setTimeout(
              () => revealSection(section),
              delayForLoader,
            );
            revealTimers.push(timer);
          } else {
            revealSection(section);
          }

          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    sections.forEach((section) => {
      section.dataset.revealState = "hidden";
      const revealItems = Array.from(
        section.querySelectorAll<HTMLElement>("[data-reveal-item]"),
      );

      revealItems.forEach((item, index) => {
        item.style.setProperty("--reveal-index", String(Math.min(index, 10)));
        delete item.dataset.revealComplete;
        if (!item.dataset.revealFrom) {
          item.dataset.revealFrom =
            revealDirections[index % revealDirections.length];
        }
      });

      observer.observe(section);
    });

    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(
        scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0,
      );
    };

    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        updateProgress();
        frame = 0;
      });
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });

    let smoothScrollFrame = 0;

    const scrollToTarget = (targetId: string) => {
      const id = decodeURIComponent(targetId.replace(/^#/, ""));
      const target = document.getElementById(id);
      if (!target) return false;

      const style = window.getComputedStyle(root);
      const scrollPaddingTop =
        Number.parseFloat(style.scrollPaddingTop || "0") || 0;
      const targetTop = Math.max(0, Math.min(
        target.getBoundingClientRect().top + window.scrollY - scrollPaddingTop,
        root.scrollHeight - window.innerHeight,
      ));
      const startTop = window.scrollY;
      const distance = targetTop - startTop;

      if (smoothScrollFrame) window.cancelAnimationFrame(smoothScrollFrame);

      if (reducedMotion || Math.abs(distance) < 2) {
        window.scrollTo({ top: targetTop, behavior: "instant" });
      } else {
        const duration = Math.min(600, Math.max(280, Math.sqrt(Math.abs(distance)) * 6));
        const startTime = performance.now();

        const animateScroll = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = easeOutCubic(progress);

          // Each frame already supplies the easing. CSS smooth scrolling would
          // restart a second animation every frame, creating a delayed glide.
          window.scrollTo({ top: startTop + distance * easedProgress, behavior: "instant" });

          if (progress < 1) {
            smoothScrollFrame = window.requestAnimationFrame(animateScroll);
          } else {
            smoothScrollFrame = 0;
          }
        };

        smoothScrollFrame = window.requestAnimationFrame(animateScroll);
      }
      return true;
    };

    const handleSectionNavClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest<HTMLElement>(
        "[data-scroll-target], a[href^='#']",
      );
      const targetId =
        trigger?.dataset.scrollTarget ||
        trigger?.getAttribute("href")?.replace(/^#/, "");

      if (!targetId) return;
      if (!scrollToTarget(targetId)) return;

      event.preventDefault();
    };

    document.addEventListener("click", handleSectionNavClick, true);

    const cancelSmoothScroll = () => {
      if (smoothScrollFrame) window.cancelAnimationFrame(smoothScrollFrame);
      smoothScrollFrame = 0;
    };
    window.addEventListener("wheel", cancelSmoothScroll, { passive: true });
    window.addEventListener("touchstart", cancelSmoothScroll, { passive: true });

    return () => {
      root.classList.remove("motion-ready");
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleSectionNavClick, true);
      window.removeEventListener("wheel", cancelSmoothScroll);
      window.removeEventListener("touchstart", cancelSmoothScroll);
      revealTimers.forEach((revealTimer) => window.clearTimeout(revealTimer));
      if (smoothScrollFrame) window.cancelAnimationFrame(smoothScrollFrame);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [reducedMotion]);

  const handleLoaderPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    event.currentTarget.style.setProperty("--loader-x", `${x.toFixed(1)}%`);
    event.currentTarget.style.setProperty("--loader-y", `${y.toFixed(1)}%`);
  };

  return (
    <>
      <span
        className={styles.scrollProgress}
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />

      <AnimatePresence>
        {loading && (
          <motion.div
            key={theme}
            className={styles.loader}
            data-loader-theme={theme}
            onPointerMove={handleLoaderPointerMove}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0.16 : 0.32 }}
            aria-hidden="true"
          >
            <div className={styles.loaderPanel}>
              <motion.div
                className={styles.loaderGlyph}
                initial={
                  reducedMotion ? false : { opacity: 0, y: 14, scale: 0.96 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.54, ease: [0.2, 0.75, 0.25, 1] }}
                aria-hidden="true"
              >
                <span
                  className={`${styles.loaderTile} ${styles.loaderTileA}`}
                />
                <span
                  className={`${styles.loaderTile} ${styles.loaderTileB}`}
                />
                <span
                  className={`${styles.loaderTile} ${styles.loaderTileC}`}
                />
                <span
                  className={`${styles.loaderTile} ${styles.loaderTileD}`}
                />
                <span className={styles.loaderSignal} />
                <svg className={styles.blueprintGlyph} viewBox="0 0 200 160" fill="none" aria-hidden="true">
                  <g stroke="currentColor" strokeWidth="1" opacity=".4"><path d="M10 20H190M10 140H190M30 5V155M170 5V155" strokeDasharray="3 4"/><path d="M36 12H164M36 8V16M164 8V16M182 30V130M178 30H186M178 130H186"/></g>
                  <g className={styles.draftLines} stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><path d="M100 28 156 60 100 92 44 60Z"/><path d="M44 60V116L100 148 156 116V60M100 92V148"/><path d="M72 44 128 76M72 132V76L128 44" strokeDasharray="4 4" opacity=".55"/></g>
                  <circle className={styles.draftPoint} cx="100" cy="92" r="4" fill="#ffd386"/>
                  <text x="100" y="9" textAnchor="middle" fill="currentColor" stroke="none" fontSize="7" fontFamily="monospace">FIG. 01 / IDEAS → SYSTEMS</text>
                </svg>
                <svg className={styles.spaceGlyph} viewBox="0 0 200 160" fill="none" aria-hidden="true">
                  <g fill="#f9e8b8"><path d="m28 32 2 5 5 2-5 2-2 5-2-5-5-2 5-2Z"/><circle cx="163" cy="33" r="2"/><circle cx="35" cy="118" r="2"/></g>
                  <g className={styles.loaderPlanet}><circle cx="160" cy="109" r="19" fill="#9c8bdb"/><ellipse cx="160" cy="109" rx="31" ry="8" stroke="#d5c4ff" strokeWidth="4" transform="rotate(-25 160 109)"/></g>
                  <g className={styles.loaderRocket} stroke="#24203c" strokeWidth="3" strokeLinejoin="round"><path className={styles.rocketFlame} d="M83 110 100 146 116 110" fill="#ffd386"/><path d="M81 77 65 109 84 106M119 77 135 109 116 106" fill="#b9a0ef"/><path d="M100 20C77 42 77 73 83 111H117C123 73 123 42 100 20Z" fill="#fff4dd"/><path d="M100 20C91 29 86 39 83 50H117C114 39 109 29 100 20Z" fill="#ed9b9b"/><circle cx="100" cy="69" r="12" fill="#91deda"/><path d="M100 95V118" stroke="#b9a0ef" strokeWidth="6"/></g>
                </svg>
              </motion.div>
              <div className={styles.loaderTrack}>
                <motion.span
                  initial={reducedMotion ? false : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.82, ease: [0.2, 0.75, 0.25, 1] }}
                />
              </div>
              <div className={styles.loaderHints}>
                {(theme === "space" ? ["Imagine", "Build", "Launch"] : theme === "blueprint" ? ["01 / Sketch", "02 / Engineer", "03 / Build"] : ["Design", "Build", "Ship"]).map(hint => <span key={hint}>{hint}</span>)}
              </div>
              <p>{theme === "space" ? "GETTING READY FOR LIFTOFF" : theme === "blueprint" ? "DRAFTING THE EXPERIENCE" : "ASSEMBLING THE EXPERIENCE"}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default PageMotion;
