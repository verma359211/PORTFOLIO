"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
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
  ABOUT_TIMELINE_ASSETS,
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
              key={chapter.id}
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
          <Image
            src={ABOUT_TIMELINE_ASSETS.decor.leafSprig}
            alt=""
            width={118}
            height={64}
            aria-hidden="true"
          />
          <p>{aboutTimelineContent.closingLine}</p>
          <Image
            src={ABOUT_TIMELINE_ASSETS.decor.redHeart}
            alt=""
            width={36}
            height={34}
            aria-hidden="true"
          />
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
      <div className={styles.headingBlock}>
        <div className={styles.eyebrowRow}>
          <span>{aboutTimelineContent.eyebrow}</span>
          <span aria-hidden="true" />
        </div>
        <h2 id="about-timeline-heading">{aboutTimelineContent.heading}</h2>
        <Image
          className={styles.greenUnderline}
          src={ABOUT_TIMELINE_ASSETS.decor.greenUnderline}
          alt=""
          width={180}
          height={20}
          aria-hidden="true"
        />
        <Image
          className={styles.sparkStars}
          src={ABOUT_TIMELINE_ASSETS.decor.sparkStars}
          alt=""
          width={74}
          height={58}
          aria-hidden="true"
        />
      </div>

      <div className={styles.introduction}>
        <p>{aboutTimelineContent.introduction[0]}</p>
        <p>
          I learn by building, solve real problems, and ship{" "}
          <span className={styles.meaningfulWork}>meaningful work</span>.
        </p>
        <p className={styles.thankYou}>
          {aboutTimelineContent.thankYou}
          <Image
            src={ABOUT_TIMELINE_ASSETS.decor.redHeart}
            alt=""
            width={24}
            height={22}
            aria-hidden="true"
          />
        </p>
      </div>

      <div className={styles.noteScene} aria-label="Personal note">
        <div className={styles.pinnedNote}>
          <span className={styles.pin} aria-hidden="true" />
          <span className={styles.tape} aria-hidden="true" />
          {aboutTimelineContent.pinnedNote.map((line) => (
            <span key={line}>{line}</span>
          ))}
          <Image
            src={ABOUT_TIMELINE_ASSETS.decor.leafSprig}
            alt=""
            width={70}
            height={40}
            aria-hidden="true"
          />
        </div>
        <Image
          className={styles.mountainSketch}
          src={ABOUT_TIMELINE_ASSETS.decor.mountainSketch}
          alt=""
          width={190}
          height={130}
          aria-hidden="true"
        />
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
  return (
    <li
      className={`${styles.chapter} ${
        chapter.id === "startup" ? styles.startupChapter : ""
      }`}
    >
      <div className={styles.nodeHeader}>
        <span className={styles.node}>{chapter.number}</span>
        <div>
          <h3>{chapter.shortTitle}</h3>
          <p>{chapter.period}</p>
        </div>
      </div>

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

      <div className={styles.chapterCopy}>
        <h4>{chapter.title}</h4>
        <p>{chapter.description}</p>
        {chapter.incompletePersonalDetails && (
          <span className={styles.detailPending}>
            Personal details ready to be added
          </span>
        )}
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

    let intervalId: ReturnType<typeof setInterval> | undefined;
    const timeoutId = setTimeout(() => {
      showNext();
      intervalId = setInterval(showNext, chapter.cycleMs);
    }, chapter.initialDelayMs);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [chapter.cycleMs, chapter.initialDelayMs, paused, showNext]);

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
            return (
              <LayeredPhoto
                key={photo.src}
                photo={photo}
                stackPosition={stackPosition}
                isTop={stackPosition === 0}
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
  caption,
}: {
  photo: AboutTimelineMedia;
  stackPosition: number;
  isTop: boolean;
  caption: string;
}) {
  const layerStyle: LayerStyle = {
    "--photo-rotation": `${photo.rotation}deg`,
    zIndex: 3 - stackPosition,
  };

  return (
    <span
      className={`${styles.photoLayer} ${styles[`layer${stackPosition}`]}`}
      style={layerStyle}
    >
      <span className={styles.photoTape} />
      <span className={styles.photoImage}>
        <Image
          src={photo.src}
          alt=""
          width={photo.width}
          height={photo.height}
          sizes="(max-width: 699px) 72vw, (max-width: 1179px) 36vw, 16vw"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src = photo.fallbackSrc;
          }}
        />
      </span>
      {isTop && <span className={styles.photoCaption}>{caption}</span>}
    </span>
  );
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
      event.preventDefault();
      showPrevious();
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
      return;
    }

    if (event.key !== "Tab" || !dialogRef.current) return;

    const focusable = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
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
            <Image
              src={activeMedia.src}
              alt={activeMedia.alt}
              width={activeMedia.width}
              height={activeMedia.height}
              sizes="(max-width: 699px) 90vw, 48vw"
              onError={(event) => {
                event.currentTarget.src = activeMedia.fallbackSrc;
              }}
            />
          </div>

          <div className={styles.dialogImageControls}>
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Show previous chapter image"
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <span>
              {expanded.imageIndex + 1} / {chapter.media.length}
            </span>
            <button
              type="button"
              onClick={showNext}
              aria-label="Show next chapter image"
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>

          <div className={styles.dialogThumbnails}>
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
                aria-label={`Show chapter image ${imageIndex + 1}`}
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
            {aboutTimelineContent.placeholderNotice}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
