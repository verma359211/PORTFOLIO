"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import styles from "./liveProjectLink.module.css";

export default function LiveProjectLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.6 });
  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
      data-seen={seen}
    >
      <span className={styles.status}>
        <span className={styles.dot} aria-hidden="true" />
        LIVE
      </span>
      <span className={styles.label}>{children}</span>
      <span className={styles.arrow}>
        <ArrowUpRight size={19} aria-hidden="true" />
      </span>
    </a>
  );
}
