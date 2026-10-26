"use client";

import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Images, Play, X } from "lucide-react";
import React, {
  type CSSProperties,
  type KeyboardEvent,
  type RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

import {
  type AboutTimelineChapter,
  type AboutTimelineMedia,
  aboutTimelineContent,
} from "../lib/aboutTimelineContent";
import styles from "./aboutSection.module.css";

type ExpandedChapter = {
  chapterIndex: number;
  imageIndex: number;
};

type LayerStyle = CSSProperties & {
  "--photo-rotation": string;
};

const CHAPTER_ACCENT_NOTES: Partial<
  Record<AboutTimelineChapter["id"], { text: string; tone: "green" | "orange" }>
> = {
  school: {
    text: "Always questioning.\nAlways exploring.",
    tone: "green",
  },
  startup: {
    text: "Real users.\nReal feedback.\nReal lessons.",
    tone: "orange",
  },
  "now-next": {
    text: "Grateful for the journey.\nExcited for what’s next.",
    tone: "green",
  },
};

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const updateMatch = () => setMatches(mediaQuery.matches);

    updateMatch();
    mediaQuery.addEventListener("change", updateMatch);

    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, [query]);

  return matches;
}

function usePageVisibility() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateVisibility = () =>
      setIsVisible(document.visibilityState === "visible");

    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);

    return () =>
      document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  return isVisible;
}

function useIntersection<T extends HTMLElement>(
  options: IntersectionObserverInit,
): [RefObject<T>, boolean] {
  const elementRef = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const rootMargin = options.rootMargin;
  const threshold = options.threshold;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { rootMargin, threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return [elementRef, isIntersecting];
}

function AboutSection() {
  const [sectionRef, sectionVisible] = useIntersection<HTMLElement>({
    rootMargin: "180px 0px",
    threshold: 0.08,
  });
  const [expanded, setExpanded] = useState<ExpandedChapter | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const pageVisible = usePageVisibility();
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isMobile = useMediaQuery("(max-width: 699px)");

  const openChapter = useCallback(
    (
      chapterIndex: number,
      imageIndex: number,
      trigger: HTMLButtonElement | null,
    ) => {
      lastTriggerRef.current = trigger;
      setExpanded({ chapterIndex, imageIndex });
    },
    [],
  );

  const closeChapter = useCallback(() => {
    setExpanded(null);
    window.requestAnimationFrame(() => lastTriggerRef.current?.focus());
  }, []);

  return (
    <section
      ref={sectionRef}
      id={aboutTimelineContent.sectionId}
      className={styles.aboutSection}
      aria-labelledby="about-timeline-heading"
      data-section-reveal
    >
      <div className={styles.paperTexture} aria-hidden="true" />
      <div className={styles.inner}>
        <AboutTimelineHeader />

        <ol
          className={styles.timelineList}
          aria-label="My story in five chapters"
        >
          {aboutTimelineContent.chapters.map((chapter, chapterIndex) => (
            <TimelineChapter
              key={`${chapter.id}-${chapter.media.length}`}
              chapter={chapter}
              chapterIndex={chapterIndex}
              sectionVisible={sectionVisible}
              pageVisible={pageVisible}
              reducedMotion={reducedMotion}
              isMobile={isMobile}
              isExpanded={expanded?.chapterIndex === chapterIndex}
              onOpen={openChapter}
            />
          ))}
        </ol>

        <noscript>
          <div className={styles.staticFallback}>
            {aboutTimelineContent.chapters.map((chapter) => (
              <figure key={chapter.id}>
                <Image
                  src={chapter.collageFallback.src}
                  alt={chapter.collageFallback.alt}
                  width={chapter.collageFallback.width}
                  height={chapter.collageFallback.height}
                />
                <figcaption>{chapter.title}</figcaption>
              </figure>
            ))}
          </div>
        </noscript>

        <footer className={styles.closing}>
          <p>{aboutTimelineContent.closingLine}</p>
        </footer>

        <p className={styles.placeholderNotice}>
          {aboutTimelineContent.placeholderNotice}
        </p>
      </div>

      {expanded &&
        createPortal(
          <ExpandedChapterDialog
            expanded={expanded}
            onChange={setExpanded}
            onClose={closeChapter}
          />,
          document.body,
        )}
    </section>
  );
}

function AboutTimelineHeader() {
  return (
    <header className={styles.editorialHeader}>
      <div
        className={styles.headingBlock}
        data-reveal-item
        data-reveal-from="left"
      >
        <div className={styles.eyebrowRow}>
          <span>{aboutTimelineContent.eyebrow}</span>
          <span aria-hidden="true" />
        </div>
        <h2 id="about-timeline-heading">{aboutTimelineContent.heading}</h2>
      </div>

      <div
        className={styles.introduction}
        data-reveal-item
        data-reveal-from="bottom"
      >
        <p>{aboutTimelineContent.introduction[0]}</p>
        <p>
          I learn by building, solve real problems, and ship{" "}
          <span className={styles.meaningfulWork}>meaningful work</span>.
        </p>
        <p className={styles.thankYou}>{aboutTimelineContent.thankYou}</p>
      </div>

      <div
        className={styles.noteScene}
        aria-label="Personal note"
        data-reveal-item
        data-reveal-from="right"
      >
        <div className={styles.pinnedNote}>
          <span className={styles.pin} aria-hidden="true" />
          <strong>How I work</strong>
          {aboutTimelineContent.pinnedNote.map((line) => (
            <span key={line}>{line}</span>
          ))}
          <span className={styles.noteUnderline} aria-hidden="true" />
        </div>
      </div>
    </header>
  );
}

type TimelineChapterProps = {
  chapter: AboutTimelineChapter;
  chapterIndex: number;
  sectionVisible: boolean;
  pageVisible: boolean;
  reducedMotion: boolean;
  isMobile: boolean;
  isExpanded: boolean;
  onOpen: (
    chapterIndex: number,
    imageIndex: number,
    trigger: HTMLButtonElement | null,
  ) => void;
};

function TimelineChapter({
  chapter,
  chapterIndex,
  sectionVisible,
  pageVisible,
  reducedMotion,
  isMobile,
  isExpanded,
  onOpen,
}: TimelineChapterProps) {
  const accentNote = CHAPTER_ACCENT_NOTES[chapter.id];

  return (
    <li
      className={`${styles.chapter} ${
        chapter.id === "startup" ? styles.startupChapter : ""
      }`}
      data-reveal-item
      data-reveal-from={
        chapterIndex % 4 === 0
          ? "left"
          : chapterIndex % 4 === 1
            ? "bottom"
            : chapterIndex % 4 === 2
              ? "right"
              : "top"
      }
    >
      <div className={styles.nodeHeader}>
        <span className={styles.node}>{chapter.number}</span>
        <div>
          <h3>{chapter.shortTitle}</h3>
          <p>{chapter.period}</p>
        </div>
      </div>
      {chapterIndex < aboutTimelineContent.chapters.length - 1 && (
        <span className={styles.timelineArrow} aria-hidden="true">
          <ArrowRight strokeWidth={1.7} />
        </span>
      )}

      <TimelineMediaStack
        chapter={chapter}
        chapterIndex={chapterIndex}
        sectionVisible={sectionVisible}
        pageVisible={pageVisible}
        reducedMotion={reducedMotion}
        isMobile={isMobile}
        isExpanded={isExpanded}
        onOpen={onOpen}
      />

      {accentNote && (
        <span
          className={`${styles.chapterAccentNote} ${
            accentNote.tone === "orange"
              ? styles.chapterAccentOrange
              : styles.chapterAccentGreen
          }`}
          aria-hidden="true"
        >
          {accentNote.text}
        </span>
      )}

      <div className={styles.chapterCopy}>
        <h4>{chapter.title}</h4>
        <p>{chapter.description}</p>
      </div>
    </li>
  );
}

type TimelineMediaStackProps = TimelineChapterProps;

function TimelineMediaStack({
  chapter,
  chapterIndex,
  sectionVisible,
  pageVisible,
  reducedMotion,
  isMobile,
  isExpanded,
  onOpen,
}: TimelineMediaStackProps) {
  const [stackRef, stackVisible] = useIntersection<HTMLDivElement>({
    rootMargin: "100px 0px",
    threshold: 0.12,
  });
  const [order, setOrder] = useState(() =>
    chapter.media.map((_, imageIndex) => imageIndex),
  );
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const showNext = useCallback(() => {
    setOrder((currentOrder) => [...currentOrder.slice(1), currentOrder[0]]);
  }, []);

  const showPrevious = useCallback(() => {
    setOrder((currentOrder) => [
      currentOrder[currentOrder.length - 1],
      ...currentOrder.slice(0, -1),
    ]);
  }, []);

  const paused =
    isHovered ||
    hasFocus ||
    isExpanded ||
    !pageVisible ||
    !sectionVisible ||
    !stackVisible ||
    reducedMotion ||
    (isMobile && !hasInteracted);

  useEffect(() => {
    if (paused) return;

    // Let a video finish before moving the next photograph to the front.
    const currentMedia = chapter.media[order[0]];
    const delay = currentMedia.videoSrc
      ? Math.max(chapter.cycleMs, (currentMedia.durationMs ?? 0) + 500)
      : chapter.cycleMs;
    const timeoutId = setTimeout(showNext, delay);
    return () => clearTimeout(timeoutId);
  }, [chapter.cycleMs, chapter.media, order, paused, showNext]);

  const handleManualCycle = (direction: "next" | "previous") => {
    setHasInteracted(true);
    if (direction === "next") showNext();
    else showPrevious();
  };

  return (
    <div
      ref={stackRef}
      className={styles.mediaInteraction}
      data-autoplay={paused ? "paused" : "running"}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onFocus={() => setHasFocus(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setHasFocus(false);
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        className={styles.stackButton}
        aria-label={`Open ${chapter.title} expanded view`}
        aria-haspopup="dialog"
        onClick={() => {
          setHasInteracted(true);
          onOpen(chapterIndex, order[0], triggerRef.current);
        }}
      >
        <span className={styles.mediaStage} aria-hidden="true">
          {chapter.media.map((photo, imageIndex) => {
            const stackPosition = order.indexOf(imageIndex);
            if (stackPosition < 0 || stackPosition > 2) return null;
            return (
              <LayeredPhoto
                key={photo.src}
                photo={photo}
                stackPosition={stackPosition}
                isTop={stackPosition === 0}
                videoActive={stackPosition === 0 && pageVisible && sectionVisible && stackVisible && !isExpanded}
                caption={chapter.caption}
              />
            );
          })}
          <span className={styles.viewPrompt}>
            <Images aria-hidden="true" />
            View chapter
          </span>
        </span>
      </button>

      <div className={styles.mobileMediaControls}>
        <button
          type="button"
          onClick={() => handleManualCycle("previous")}
          aria-label={`Show previous ${chapter.shortTitle} image`}
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <span aria-live="polite">
          {order[0] + 1} / {chapter.media.length}
        </span>
        <button
          type="button"
          onClick={() => handleManualCycle("next")}
          aria-label={`Show next ${chapter.shortTitle} image`}
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function LayeredPhoto({
  photo,
  stackPosition,
  isTop,
  videoActive,
  caption,
}: {
  photo: AboutTimelineMedia;
  stackPosition: number;
  isTop: boolean;
  videoActive: boolean;
  caption: string;
}) {
  const layerStyle: LayerStyle = {
    "--photo-rotation": `${photo.rotation}deg`,
    zIndex: 3 - stackPosition,
  };

  return (
    <span
      className={`${styles.photoLayer} ${styles[`layer${stackPosition}`]} ${
        isTop ? styles.topLayer : ""
      }`}
      style={layerStyle}
    >
      <span className={styles.photoTape} />
      <span className={styles.photoImage}>
        {photo.videoSrc && isTop ? (
          <TimelineVideo media={photo} active={videoActive} />
        ) : <Image
          src={photo.src}
          alt=""
          width={photo.width}
          height={photo.height}
          sizes="(max-width: 699px) 72vw, (max-width: 1179px) 36vw, 16vw"
          loading="lazy"
          style={{ objectFit: photo.fit ?? "cover" }}
          onError={(event) => {
            event.currentTarget.src = photo.fallbackSrc;
          }}
        />}
        {photo.videoSrc && <span className={styles.videoIndicator}><Play size={12} aria-hidden="true" /> Video</span>}
      </span>
      {isTop && <span className={styles.photoCaption}>{caption}</span>}
    </span>
  );
}

function TimelineVideo({ media, active, controls = false }: {
  media: AboutTimelineMedia;
  active: boolean;
  controls?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [motionAllowed, setMotionAllowed] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMotionAllowed(!preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  const autoplay = active && motionAllowed;
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (autoplay) void video.play().catch(() => { /* Poster and gallery controls remain available. */ });
    else video.pause();
    return () => video.pause();
  }, [autoplay]);

  return <video
    ref={videoRef}
    className={styles.chapterVideo}
    src={media.videoSrc}
    poster={media.src}
    aria-label={controls ? media.alt : undefined}
    controls={controls}
    autoPlay={autoplay}
    loop
    muted
    playsInline
    preload={active ? "metadata" : "none"}
    style={{ objectFit: media.fit ?? "cover" }}
  />;
}

function ExpandedChapterDialog({
  expanded,
  onChange,
  onClose,
}: {
  expanded: ExpandedChapter;
  onChange: React.Dispatch<React.SetStateAction<ExpandedChapter | null>>;
  onClose: () => void;
}) {
  const chapter = aboutTimelineContent.chapters[expanded.chapterIndex];
  const activeMedia = chapter.media[expanded.imageIndex];
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const pageVisible = usePageVisibility();

  const showPrevious = useCallback(() => {
    onChange((current) =>
      current
        ? {
            ...current,
            imageIndex:
              (current.imageIndex - 1 + chapter.media.length) %
              chapter.media.length,
          }
        : current,
    );
  }, [chapter.media.length, onChange]);

  const showNext = useCallback(() => {
    onChange((current) =>
      current
        ? {
            ...current,
            imageIndex: (current.imageIndex + 1) % chapter.media.length,
          }
        : current,
    );
  }, [chapter.media.length, onChange]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key === "ArrowLeft") {
      if ((event.target as HTMLElement).tagName === "VIDEO") return;
      event.preventDefault();
      showPrevious();
      return;
    }

    if (event.key === "ArrowRight") {
      if ((event.target as HTMLElement).tagName === "VIDEO") return;
      event.preventDefault();
      showNext();
      return;
    }

    if (event.key !== "Tab" || !dialogRef.current) return;

    const focusable = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], video[controls], [tabindex]:not([tabindex="-1"])',
      ),
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      className={styles.dialogBackdrop}
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="expanded-chapter-title"
        aria-describedby="expanded-chapter-description"
        onKeyDown={handleKeyDown}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className={styles.dialogClose}
          onClick={onClose}
          aria-label="Close expanded chapter"
        >
          <X aria-hidden="true" />
        </button>

        <div className={styles.dialogMedia}>
          <div className={styles.dialogFeaturedImage}>
            {activeMedia.videoSrc ? <TimelineVideo
              key={activeMedia.videoSrc}
              media={activeMedia}
              active={pageVisible}
              controls
            /> : <Image
              src={activeMedia.src}
              alt={activeMedia.alt}
              width={activeMedia.width}
              height={activeMedia.height}
              sizes="(max-width: 699px) 90vw, 48vw"
              style={{ objectFit: activeMedia.fit ?? "cover" }}
              onError={(event) => {
                event.currentTarget.src = activeMedia.fallbackSrc;
              }}
            />}
          </div>

          <div className={styles.dialogImageControls}>
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Show previous chapter item"
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <span>
              {expanded.imageIndex + 1} / {chapter.media.length}
            </span>
            <button
              type="button"
              onClick={showNext}
              aria-label="Show next chapter item"
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>

          <div className={styles.dialogThumbnails} data-many={chapter.media.length > 3}>
            {chapter.media.map((photo, imageIndex) => (
              <button
                key={photo.src}
                type="button"
                className={
                  imageIndex === expanded.imageIndex
                    ? styles.activeThumbnail
                    : ""
                }
                onClick={() =>
                  onChange((current) =>
                    current ? { ...current, imageIndex } : current,
                  )
                }
                aria-label={`Show chapter ${photo.videoSrc ? "video" : "image"} ${imageIndex + 1}`}
                aria-current={
                  imageIndex === expanded.imageIndex ? "true" : undefined
                }
              >
                <Image
                  src={photo.src}
                  alt=""
                  width={photo.width}
                  height={photo.height}
                  sizes="84px"
                />
                {photo.videoSrc && <span className={styles.videoThumbnailBadge}><Play size={12} aria-hidden="true" /></span>}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.dialogCopy}>
          <span>{chapter.period}</span>
          <h3 id="expanded-chapter-title">{chapter.title}</h3>
          <p id="expanded-chapter-description">{chapter.description}</p>
          <blockquote>{chapter.caption}</blockquote>
          <p className={styles.dialogPlaceholderNotice}>
            {chapter.photoNotice ?? aboutTimelineContent.placeholderNotice}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
