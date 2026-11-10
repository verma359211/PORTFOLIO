"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import styles from "./liveProjectLink.module.css";

export default function LiveProjectLink({
  href,
  children,
  disabled = false,
  statusLabel = "LIVE",
}: {
  href: string;
  children: React.ReactNode;
  disabled?: boolean;
  statusLabel?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.6 });

  const content = (
    <>
      <span className={styles.status}>
        <span className={styles.dot} aria-hidden="true" />
        {statusLabel}
      </span>
      <span className={styles.label}>{children}</span>
      <span className={styles.arrow}>
        <ArrowUpRight size={19} aria-hidden="true" />
      </span>
    </>
  );

  if (disabled) {
    return (
      <button type="button" className={styles.link} disabled aria-label={`${children} — temporarily unavailable`}>
        {content}
      </button>
    );
  }

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
      data-seen={seen}
    >
      {content}
    </a>
  );
}
