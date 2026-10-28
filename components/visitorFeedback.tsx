"use client";

import {
  ArrowUpRight,
  Check,
  MailOpen,
  MessageSquare,
  Send,
  Star,
  X,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { createPortal } from "react-dom";
import {
  FEEDBACK_COMMENT_LIMIT,
  FEEDBACK_DELAY_MS,
  FEEDBACK_RATINGS,
} from "../lib/feedback";
import { RESUME_URL } from "../lib/portfolioLinks";
import styles from "./visitorFeedback.module.css";

const SESSION_KEY = "portfolio-feedback-prompt-v1";

function rememberPrompt() {
  try {
    sessionStorage.setItem(SESSION_KEY, "seen");
  } catch {
    /* Storage can be unavailable in private browsers. */
  }
}

export default function VisitorFeedback() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");
  const [announcement, setAnnouncement] = useState("");
  const panel = useRef<HTMLElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const prompted = useRef(false);
  const focusOnOpen = useRef(false);
  const requestInFlight = useRef(false);
  const controller = useRef<AbortController | null>(null);

  useEffect(() => {
    setMounted(true);
    try {
      prompted.current = sessionStorage.getItem(SESSION_KEY) === "seen";
    } catch {
      /* Continue with in-memory session state. */
    }

    let elapsed = 0;
    let previous = performance.now();
    const tick = () => {
      const now = performance.now();
      if (document.visibilityState === "visible")
        elapsed += Math.min(now - previous, 1_000);
      previous = now;
      if (
        prompted.current ||
        elapsed < FEEDBACK_DELAY_MS ||
        document.visibilityState !== "visible"
      )
        return;

      const active = document.activeElement;
      const editing =
        active instanceof HTMLElement &&
        (active.matches("input, textarea, select") || active.isContentEditable);
      if (
        editing ||
        document.querySelector(
          '[role="dialog"][aria-modal="true"], dialog[open]',
        )
      )
        return;

      prompted.current = true;
      rememberPrompt();
      setOpen(true);
      setAnnouncement(
        "A quick feedback form and recruiter résumé link are available at the bottom of the page.",
      );
    };
    const timer = window.setInterval(tick, 1_000);
    const visibilityChanged = () => {
      previous = performance.now();
    };
    document.addEventListener("visibilitychange", visibilityChanged);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", visibilityChanged);
      controller.current?.abort();
    };
  }, []);

  useEffect(() => {
    if (open && focusOnOpen.current) {
      heading.current?.focus({ preventScroll: true });
      focusOnOpen.current = false;
    }
  }, [open, status]);

  const close = useCallback(() => {
    const restoreFocus = panel.current?.contains(document.activeElement);
    setOpen(false);
    setAnnouncement("");
    if (restoreFocus) trigger.current?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    if (!open) return;
    const dismiss = (event: KeyboardEvent) => {
      if (
        event.key === "Escape" &&
        !document.querySelector(
          '[role="dialog"][aria-modal="true"], dialog[open]',
        )
      )
        close();
    };
    document.addEventListener("keydown", dismiss);
    return () => document.removeEventListener("keydown", dismiss);
  }, [open, close]);

  const toggle = () => {
    prompted.current = true;
    rememberPrompt();
    if (open) close();
    else {
      focusOnOpen.current = true;
      setOpen(true);
    }
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (rating < 1 || requestInFlight.current || status === "success") return;
    requestInFlight.current = true;
    setStatus("sending");
    setError("");
    controller.current = new AbortController();
    const timeout = window.setTimeout(
      () => controller.current?.abort(),
      25_000,
    );
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating, comment: comment.trim(), website }),
        signal: controller.current.signal,
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        throw new Error(
          response.status === 429
            ? "Please wait a minute before sending again."
            : "That didn’t send. Please try again, or email me directly.",
        );
      }
      focusOnOpen.current = Boolean(
        panel.current?.contains(document.activeElement),
      );
      setStatus("success");
    } catch (cause) {
      setStatus("error");
      setError(
        cause instanceof Error && cause.name === "AbortError"
          ? "That took too long. Your feedback is still here—please try again."
          : cause instanceof Error && cause.message.startsWith("Please wait")
            ? cause.message
            : "That didn’t send. Your feedback is still here—please try again.",
      );
    } finally {
      window.clearTimeout(timeout);
      requestInFlight.current = false;
    }
  };

  if (!mounted) return null;

  return createPortal(
    <div className={styles.widget}>
      <span className={styles.srOnly} role="status" aria-live="polite">
        {announcement}
      </span>
      {open && (
        <section
          id="visitor-feedback"
          ref={panel}
          role="dialog"
          aria-modal="false"
          aria-labelledby="feedback-heading"
          className={styles.panel}
        >
          <header className={styles.header}>
            <span className={styles.eyebrow}>
              <span className={styles.mark} aria-hidden="true" /> A QUICK
              CHECK-IN
            </span>
            <button
              className={styles.close}
              type="button"
              onClick={close}
              aria-label="Close feedback"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </header>

          {status === "success" ? (
            <div className={styles.thanks} role="status">
              <span className={styles.successIcon}>
                <Check size={24} aria-hidden="true" />
              </span>
              <h2 id="feedback-heading" ref={heading} tabIndex={-1}>
                Thanks for the honest take.
              </h2>
              <p>Feedback received. A little input for the next iteration.</p>
              <button
                type="button"
                className={styles.secondary}
                onClick={close}
              >
                Keep exploring <ArrowUpRight size={16} aria-hidden="true" />
              </button>
            </div>
          ) : (
            <>
              <h2 id="feedback-heading" ref={heading} tabIndex={-1}>
                How’s the experiment?
              </h2>

              <form onSubmit={submit} aria-busy={status === "sending"}>
                <fieldset
                  className={styles.rating}
                  disabled={status === "sending"}
                >
                  <legend className={styles.srOnly}>
                    How would you rate your visit?
                  </legend>
                  <div
                    className={styles.stars}
                    onMouseLeave={() => setHoverRating(0)}
                  >
                    {FEEDBACK_RATINGS.map((label, index) => {
                      const value = index + 1;
                      return (
                        <label
                          key={label}
                          className={styles.star}
                          data-filled={value <= (hoverRating || rating)}
                          onMouseEnter={() => setHoverRating(value)}
                        >
                          <input
                            type="radio"
                            name="portfolio-rating"
                            value={value}
                            checked={rating === value}
                            onChange={() => {
                              setRating(value);
                              setHoverRating(0);
                            }}
                            required
                          />
                          <Star size={27} aria-hidden="true" />
                          <span className={styles.srOnly}>
                            {value} {value === 1 ? "star" : "stars"} — {label}
                          </span>
                        </label>
                      );
                    })}
                    <span className={styles.ratingValue} aria-live="polite">
                      {rating ? FEEDBACK_RATINGS[rating - 1] : "Your call."}
                    </span>
                  </div>
                </fieldset>

                <label
                  className={styles.comment}
                  htmlFor="portfolio-feedback-comment"
                >
                  <span>
                    Anything to add? <small>Optional</small>
                  </span>
                  <textarea
                    id="portfolio-feedback-comment"
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                    maxLength={FEEDBACK_COMMENT_LIMIT}
                    rows={2}
                    disabled={status === "sending"}
                    placeholder="What stood out? What could work better?"
                  />
                </label>
                <div className={styles.trap} aria-hidden="true">
                  <label>
                    Leave this blank
                    <input
                      name="website"
                      value={website}
                      onChange={(event) => setWebsite(event.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </label>
                </div>

                {status === "error" && (
                  <p className={styles.error} role="alert">
                    {error}{" "}
                    <a href="mailto:vermachandan2912003@gmail.com?subject=Portfolio%20feedback">
                      Email me
                    </a>
                  </p>
                )}
                <div className={styles.submitRow}>
                  <button
                    className={styles.submit}
                    type="submit"
                    disabled={!rating || status === "sending"}
                  >
                    {status === "sending" ? "Sending…" : "Send feedback"}
                    <Send size={15} aria-hidden="true" />
                  </button>
                  <span>No email needed.</span>
                </div>
              </form>
            </>
          )}

          <a
            className={styles.resume}
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.resumeIcon}>
              <MailOpen size={32} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <span>
              <small>A LITTLE MORE ABOUT ME</small>
              <strong>Thanks for stopping by.</strong>
              <span className={styles.resumePitch}>
                Take a look at my résumé{" "}
                <ArrowUpRight size={15} aria-hidden="true" />
              </span>
            </span>
          </a>
        </section>
      )}
      <button
        ref={trigger}
        className={styles.launcher}
        type="button"
        aria-label="Feedback & résumé"
        aria-expanded={open}
        aria-controls="visitor-feedback"
        onClick={toggle}
      >
        <MessageSquare size={16} aria-hidden="true" />
        <span>Feedback & résumé</span>
      </button>
    </div>,
    document.body,
  );
}
