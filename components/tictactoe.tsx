"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import RetroTicTacToe from "./tttretro";
import styles from "./tictactoe.module.css";
import { useHydratedReducedMotion } from "./useHydratedReducedMotion";

const RESUME_PATH = "/ChandanVerma-Resume.pdf";
const RESUME_FILENAME = "Chandan-Verma-Resume.pdf";

function Tictactoe() {
  const [showReward, setShowReward] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = useHydratedReducedMotion();

  useEffect(() => {
    if (!showReward) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowReward(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showReward]);

  return (
    <>
      <section
        id="resume-game"
        className={styles.gameSection}
        aria-labelledby="resume-game-heading"
        data-section-reveal
      >
        <div className={styles.inner}>
          <div
            className={styles.intro}
            data-reveal-item
            data-reveal-from="left"
          >
            <p className={styles.eyebrow}>
              <Sparkles aria-hidden="true" />A SMALL INTERMISSION
            </p>
            <h2 id="resume-game-heading">
              Beat the bot.
              <span>Unlock the résumé.</span>
            </h2>
            <p className={styles.description}>
              A quick game before the formal introduction. You play as O; win
              the round and the résumé reward appears.
            </p>

            <div className={styles.instructions}>
              <span>01 · Make your move</span>
              <span>02 · Beat the bot</span>
              <span>03 · Claim the résumé</span>
            </div>

            <div className={styles.actions}>
              <a
                href={RESUME_PATH}
                download={RESUME_FILENAME}
                className={styles.downloadButton}
              >
                <Download aria-hidden="true" />
                Download résumé
              </a>

              <div className={styles.socialLinks} aria-label="Social links">
                <SocialLink
                  href="https://www.linkedin.com/in/cverma7/"
                  label="LinkedIn"
                  icon={<Linkedin aria-hidden="true" />}
                />
                <SocialLink
                  href="https://github.com/verma359211"
                  label="GitHub"
                  icon={<Github aria-hidden="true" />}
                />
                <SocialLink
                  href="mailto:vermachandan2912003@gmail.com"
                  label="Email"
                  icon={<Mail aria-hidden="true" />}
                />
                <SocialLink
                  href="tel:+916289220590"
                  label="Phone"
                  icon={<Phone aria-hidden="true" />}
                />
              </div>
            </div>
          </div>

          <motion.div
            className={styles.gameFrame}
            data-reveal-item
            data-reveal-from="right"
            initial={reducedMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.6, ease: [0.2, 0.75, 0.25, 1] }}
          >
            <span className={styles.liveBadge}>
              <span aria-hidden="true" />
              Interactive
            </span>
            <RetroTicTacToe onPlayerWin={() => setShowReward(true)} />
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {showReward && (
          <motion.div
            className={styles.rewardBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="presentation"
          >
            <motion.div
              className={styles.rewardDialog}
              role="dialog"
              aria-modal="true"
              aria-labelledby="resume-reward-title"
              initial={
                reducedMotion
                  ? false
                  : { opacity: 0, y: 28, scale: 0.94, rotate: -1 }
              }
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <button
                ref={closeButtonRef}
                type="button"
                className={styles.dialogClose}
                onClick={() => setShowReward(false)}
                aria-label="Close résumé reward"
              >
                <X aria-hidden="true" />
              </button>

              <div className={styles.trophy}>
                <Trophy aria-hidden="true" />
              </div>
              <p className={styles.rewardEyebrow}>YOU BEAT THE BOT</p>
              <h2 id="resume-reward-title">Résumé unlocked.</h2>
              <p>
                Nicely played. Your reward is ready—download it directly below.
              </p>
              <a
                href={RESUME_PATH}
                download={RESUME_FILENAME}
                className={styles.rewardDownload}
              >
                <Download aria-hidden="true" />
                Download Chandan&apos;s résumé
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  const external = href.startsWith("http");

  return (
    <Link
      href={href}
      className={styles.socialLink}
      aria-label={label}
      title={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
    >
      {icon}
    </Link>
  );
}

export default Tictactoe;
