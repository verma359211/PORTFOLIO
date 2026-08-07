"use client";

import { AnimatePresence, motion } from "framer-motion";
import { type PointerEvent, useEffect, useState } from "react";

import styles from "./pageMotion.module.css";
import { useHydratedReducedMotion } from "./useHydratedReducedMotion";

const easeInOutSine = (progress: number) =>
  -(Math.cos(Math.PI * progress) - 1) / 2;

const revealDirections = ["left", "bottom", "right", "top", "bottom", "left"];
const loaderDuration = 1040;

function PageMotion() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const reducedMotion = useHydratedReducedMotion();

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
      const targetTop =
        target.getBoundingClientRect().top + window.scrollY - scrollPaddingTop;
      const startTop = window.scrollY;
      const distance = targetTop - startTop;

      if (smoothScrollFrame) window.cancelAnimationFrame(smoothScrollFrame);

      if (Math.abs(distance) < 2) {
        window.scrollTo(0, targetTop);
      } else {
        const duration = Math.min(
          2600,
          Math.max(1250, Math.abs(distance) * 0.68),
        );
        const startTime = performance.now();

        const animateScroll = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = easeInOutSine(progress);

          window.scrollTo(0, startTop + distance * easedProgress);

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

    const timer = window.setTimeout(() => setLoading(false), loaderDuration);

    return () => {
      root.classList.remove("motion-ready");
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleSectionNavClick, true);
      window.clearTimeout(timer);
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
            className={styles.loader}
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
              </motion.div>
              <div className={styles.loaderTrack}>
                <motion.span
                  initial={reducedMotion ? false : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.82, ease: [0.2, 0.75, 0.25, 1] }}
                />
              </div>
              <div className={styles.loaderHints}>
                <span>Design</span>
                <span>Build</span>
                <span>Ship</span>
              </div>
              <p>ASSEMBLING THE EXPERIENCE</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default PageMotion;
