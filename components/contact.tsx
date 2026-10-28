"use client";

import {
  FileText,
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Send,
  Twitter,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import styles from "./contact.module.css";
import { RESUME_URL } from "../lib/portfolioLinks";

const CONTACT_EMAIL = "vermachandan2912003@gmail.com";

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/cverma7/",
    Icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/verma359211",
    Icon: Github,
  },
  {
    label: "X",
    href: "https://x.com/verma359211",
    Icon: Twitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tatya_vinchooo/",
    Icon: Instagram,
  },
] as const;

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const EMPTY_FORM: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [website, setWebsite] = useState("");
  const inFlight = useRef(false);
  const requestController = useRef<AbortController | null>(null);
  useEffect(() => () => requestController.current?.abort(), []);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((current) => ({
      ...current,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (inFlight.current) return;
    inFlight.current = true;
    setIsSubmitting(true);
    setSubmitStatus(null);
    requestController.current = new AbortController();
    const timeout = window.setTimeout(
      () => requestController.current?.abort(),
      25_000,
    );

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, website }),
        signal: requestController.current.signal,
      });
      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: "Message sent. I’ll get back to you soon.",
        });
        setFormData(EMPTY_FORM);
      } else {
        setSubmitStatus({
          type: "error",
          message:
            response.status === 429
              ? "Please wait a minute before sending again."
              : "The message could not be sent. Please email me directly.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please email me directly.",
      });
    } finally {
      window.clearTimeout(timeout);
      inFlight.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact-section"
      className={styles.contactSection}
      aria-labelledby="contact-heading"
      data-section-reveal
    >
      <div className={styles.shell}>
        <span className={styles.backgroundWord} aria-hidden="true">
          HELLO
        </span>
        <span className={styles.orbitOne} aria-hidden="true" />
        <span className={styles.orbitTwo} aria-hidden="true" />

        <div className={styles.layout}>
          <div
            className={styles.invitation}
            data-reveal-item
            data-reveal-from="left"
          >
            <p className={styles.eyebrow}>
              <span aria-hidden="true" />
              CONTACT
            </p>

            <h2 id="contact-heading">
              <span>Let&apos;s make</span>
              <span>something</span>
              <span className={styles.accentWord}>matter.</span>
            </h2>

            <p className={styles.lead}>
              Have a product idea, a difficult system to untangle, or simply
              want to talk about building useful software? My inbox is open.
            </p>

            <div className={styles.directActions}>
              <a href={`mailto:${CONTACT_EMAIL}`} className={styles.directLink}>
                <span className={styles.actionIcon}>
                  <Mail aria-hidden="true" />
                </span>
                <span>
                  <small>WRITE TO ME</small>
                  <strong>{CONTACT_EMAIL}</strong>
                </span>
                <ArrowUpRight className={styles.linkArrow} aria-hidden="true" />
              </a>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.directLink}
              >
                <span className={styles.actionIcon}>
                  <FileText aria-hidden="true" />
                </span>
                <span>
                  <small>THE FORMAL VERSION</small>
                  <strong>View my résumé</strong>
                </span>
                <ArrowUpRight className={styles.linkArrow} aria-hidden="true" />
              </a>
            </div>

            <div className={styles.invitationFooter}>
              <div className={styles.socialLinks} aria-label="Social links">
                {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    title={label}
                  >
                    <Icon aria-hidden="true" />
                  </a>
                ))}
              </div>
              <p>©2026 · Designed and built by Chandan Verma</p>
            </div>
          </div>

          <div
            className={styles.formCard}
            data-reveal-item
            data-reveal-from="right"
          >
            <div className={styles.formHeader}>
              <div>
                <p>START A CONVERSATION</p>
                <h3>Tell me what you&apos;re building.</h3>
              </div>
              <span className={styles.formIndex}>05 / 05</span>
            </div>

            <form
              className={styles.form}
              onSubmit={handleSubmit}
              aria-busy={isSubmitting}
            >
              <div className={styles.honeypot} aria-hidden="true">
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
              <div className={styles.fieldGrid}>
                <FormField
                  id="name"
                  label="Your name"
                  placeholder="What should I call you?"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  maxLength={100}
                />
                <FormField
                  id="email"
                  type="email"
                  label="Email address"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  maxLength={254}
                />
              </div>

              <FormField
                id="subject"
                label="What are we talking about?"
                placeholder="A product, role, collaboration…"
                value={formData.subject}
                onChange={handleChange}
                maxLength={160}
              />

              <label className={styles.field} htmlFor="message">
                <span>Tell me a little more</span>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="The useful context, the ambitious idea, or just a hello."
                  required
                  maxLength={5000}
                />
              </label>

              <div className={styles.submitRow}>
                <button type="submit" disabled={isSubmitting}>
                  <span>{isSubmitting ? "Sending…" : "Send message"}</span>
                  <span className={styles.sendIcon}>
                    <Send aria-hidden="true" />
                  </span>
                </button>
                <p>
                  Prefer email?{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`}>Send one directly.</a>
                </p>
              </div>

              {submitStatus && (
                <p
                  className={`${styles.formStatus} ${
                    submitStatus.type === "success"
                      ? styles.success
                      : styles.error
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {submitStatus.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

function FormField({
  id,
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  autoComplete,
  maxLength,
}: {
  id: keyof FormData;
  type?: "text" | "email";
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  maxLength?: number;
}) {
  return (
    <label className={styles.field} htmlFor={id}>
      <span>{label}</span>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        maxLength={maxLength}
        required
      />
    </label>
  );
}

export default ContactSection;
