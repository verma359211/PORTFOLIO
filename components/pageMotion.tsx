"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import styles from "./pageMotion.module.css";
import { useHydratedReducedMotion } from "./useHydratedReducedMotion";

function PageMotion() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const reducedMotion = useHydratedReducedMotion();

  useEffect(() => {
    const root = document.documentElement;
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section-reveal]"),
    );

    root.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.revealState = "visible";
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );

    sections.forEach((section) => {
      section.dataset.revealState = "hidden";
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

    const timer = window.setTimeout(
      () => setLoading(false),
      reducedMotion ? 0 : 720,
    );

    return () => {
      root.classList.remove("motion-ready");
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(timer);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [reducedMotion]);

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
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.32 }}
            aria-hidden="true"
          >
            <motion.div
              className={styles.loaderMark}
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              CV
            </motion.div>
            <div className={styles.loaderTrack}>
              <motion.span
                initial={reducedMotion ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.58, ease: [0.2, 0.75, 0.25, 1] }}
              />
            </div>
            <p>BUILDING THE EXPERIENCE</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default PageMotion;
