export type AboutTimelineMedia = {
  src: string;
  fallbackSrc: string;
  alt: string;
  width: number;
  height: number;
  rotation: number;
  fit?: "cover" | "contain";
  videoSrc?: string;
  durationMs?: number;
};

export type AboutTimelineChapter = {
  id: string;
  number: string;
  period: string;
  title: string;
  shortTitle: string;
  description: string;
  caption: string;
  photoNotice?: string;
  cycleMs: number;
  initialDelayMs: number;
  collageFallback: AboutTimelineMedia;
  media: AboutTimelineMedia[];
};

const ASSET_BASE = "/assets/about-timeline";

export const ABOUT_TIMELINE_ASSETS = {
  texture: `${ASSET_BASE}/textures/warm-paper-texture.webp`,
  textureFallback: `${ASSET_BASE}/textures/warm-paper-texture.png`,
  decor: {
    greenUnderline: `${ASSET_BASE}/decor/green-underline.svg`,
    leafSprig: `${ASSET_BASE}/decor/leaf-sprig.svg`,
    mountainSketch: `${ASSET_BASE}/decor/mountain-sketch.svg`,
    redHeart: `${ASSET_BASE}/decor/red-heart.svg`,
    redUnderline: `${ASSET_BASE}/decor/red-underline.svg`,
    sparkStars: `${ASSET_BASE}/decor/spark-stars.svg`,
  },
} as const;

export const ABOUT_TIMELINE_UNRESOLVED_FIELDS = [
  "Hometown",
  "School name and school dates",
  "College name, degree, and college dates",
] as const;

const schoolPhotos: AboutTimelineMedia[] = [
  { src: `${ASSET_BASE}/school/school-celebration.jpg`, fallbackSrc: `${ASSET_BASE}/school/school-celebration.jpg`, alt: "School friends gathered for a celebration in a decorated room", width: 1280, height: 960, rotation: -3, fit: "contain" },
  { src: `${ASSET_BASE}/school/classroom-study.jpg`, fallbackSrc: `${ASSET_BASE}/school/classroom-study.jpg`, alt: "A student writing at a desk in a school classroom", width: 1280, height: 960, rotation: 4, fit: "contain" },
  { src: `${ASSET_BASE}/school/school-friends.jpg`, fallbackSrc: `${ASSET_BASE}/school/school-friends.jpg`, alt: "School friends posing together in green shirts and sashes", width: 4608, height: 3456, rotation: 2, fit: "contain" },
  { src: `${ASSET_BASE}/school/classroom-friends.jpg`, fallbackSrc: `${ASSET_BASE}/school/classroom-friends.jpg`, alt: "School friends studying together around a classroom table", width: 1280, height: 960, rotation: -2, fit: "contain" },
  { src: `${ASSET_BASE}/school/school-formal-group.jpg`, fallbackSrc: `${ASSET_BASE}/school/school-formal-group.jpg`, alt: "A group of school friends in formal clothes posing outdoors", width: 6016, height: 4000, rotation: 3, fit: "contain" },
  { src: `${ASSET_BASE}/school/school-library-group.jpg`, fallbackSrc: `${ASSET_BASE}/school/school-library-group.jpg`, alt: "School friends gathered for a group photograph in the library", width: 4000, height: 3000, rotation: -3, fit: "contain" },
  { src: `${ASSET_BASE}/school/friends-at-cafe.jpg`, fallbackSrc: `${ASSET_BASE}/school/friends-at-cafe.jpg`, alt: "Friends laughing together around a café table with a camera", width: 1101, height: 826, rotation: 2, fit: "contain" },
  { src: `${ASSET_BASE}/school/school-class-group.jpg`, fallbackSrc: `${ASSET_BASE}/school/school-class-group.jpg`, alt: "A school class group in uniforms posing together indoors", width: 1280, height: 960, rotation: -1, fit: "contain" },
];

const collegeMedia: AboutTimelineMedia[] = [
  { src: `${ASSET_BASE}/college/college-graduation.jpeg`, fallbackSrc: `${ASSET_BASE}/college/college-graduation.jpeg`, alt: "College friends celebrating graduation together in gowns and caps", width: 960, height: 1280, rotation: -1, fit: "contain" },
  { src: `${ASSET_BASE}/college/college-friends.jpeg`, fallbackSrc: `${ASSET_BASE}/college/college-friends.jpeg`, alt: "College friends posing together outside a campus building", width: 576, height: 1024, rotation: 3, fit: "contain" },
  { src: `${ASSET_BASE}/college/college-certificates.jpeg`, fallbackSrc: `${ASSET_BASE}/college/college-certificates.jpeg`, alt: "A college group standing on stage with certificates", width: 1280, height: 720, rotation: -2, fit: "contain" },
  { src: `${ASSET_BASE}/college/college-event-group.jpeg`, fallbackSrc: `${ASSET_BASE}/college/college-event-group.jpeg`, alt: "Students and faculty gathered for a college event group photograph", width: 1280, height: 720, rotation: 2, fit: "contain" },
  { src: `${ASSET_BASE}/college/college-campus-friends.jpeg`, fallbackSrc: `${ASSET_BASE}/college/college-campus-friends.jpeg`, alt: "Friends posing together beside a campus café", width: 720, height: 1280, rotation: -3, fit: "contain" },
  { src: `${ASSET_BASE}/college/college-room-memories.jpeg`, fallbackSrc: `${ASSET_BASE}/college/college-room-memories.jpeg`, alt: "College friends spending time together in a room", width: 720, height: 1280, rotation: 3, fit: "contain" },
  { src: `${ASSET_BASE}/college/college-road-trip.jpeg`, fallbackSrc: `${ASSET_BASE}/college/college-road-trip.jpeg`, alt: "Friends resting together during a road trip", width: 720, height: 1280, rotation: -2, fit: "contain" },
  { src: `${ASSET_BASE}/college/college-video-poster.jpg`, fallbackSrc: `${ASSET_BASE}/college/college-video-poster.jpg`, alt: "Friends standing on a beach at sunset", width: 360, height: 640, rotation: 2, fit: "contain", videoSrc: `${ASSET_BASE}/college/college-memories.mp4` },
  { src: `${ASSET_BASE}/college/college-video-poster-02.jpg`, fallbackSrc: `${ASSET_BASE}/college/college-video-poster-02.jpg`, alt: "College friends posing and dancing outdoors beside a motorcycle", width: 1280, height: 720, rotation: -2, fit: "contain", videoSrc: `${ASSET_BASE}/college/college-memories-02.mp4` },
  { src: `${ASSET_BASE}/college/college-exam-eve.jpeg`, fallbackSrc: `${ASSET_BASE}/college/college-exam-eve.jpeg`, alt: "A candid college room moment before an exam", width: 719, height: 1280, rotation: 3, fit: "contain" },
  { src: `${ASSET_BASE}/college/college-celebration.jpeg`, fallbackSrc: `${ASSET_BASE}/college/college-celebration.jpeg`, alt: "College friends celebrating together at an indoor event", width: 1280, height: 853, rotation: -2, fit: "contain" },
  { src: `${ASSET_BASE}/college/college-friends-evening.jpeg`, fallbackSrc: `${ASSET_BASE}/college/college-friends-evening.jpeg`, alt: "A group of college friends spending an evening together indoors", width: 1280, height: 960, rotation: 2, fit: "contain" },
];

const internshipPhotos: AboutTimelineMedia[] = [
  { src: `${ASSET_BASE}/internship/team-photo.jpeg`, fallbackSrc: `${ASSET_BASE}/internship/team-photo.jpeg`, alt: "Internship colleagues posing for a group photo in the office", width: 1280, height: 960, rotation: -2, fit: "contain" },
  { src: `${ASSET_BASE}/internship/office-moments.jpeg`, fallbackSrc: `${ASSET_BASE}/internship/office-moments.jpeg`, alt: "A candid group moment among colleagues at office workstations", width: 720, height: 1280, rotation: 5, fit: "contain" },
  { src: `${ASSET_BASE}/internship/colleagues.jpeg`, fallbackSrc: `${ASSET_BASE}/internship/colleagues.jpeg`, alt: "Two colleagues standing together beside an office whiteboard", width: 960, height: 1280, rotation: 1, fit: "contain" },
  { src: `${ASSET_BASE}/internship/workspace.jpeg`, fallbackSrc: `${ASSET_BASE}/internship/workspace.jpeg`, alt: "Office workspace with computer desks and colorful cubicle partitions", width: 720, height: 1280, rotation: -4, fit: "contain" },
];

const startupMedia: AboutTimelineMedia[] = [
  { src: `${ASSET_BASE}/startup/product-builder-poster.jpg`, fallbackSrc: `${ASSET_BASE}/startup/product-builder-poster.jpg`, alt: "A video of a product development desk and workstation", width: 576, height: 1024, rotation: -2, fit: "contain", videoSrc: `${ASSET_BASE}/startup/product-builder.mp4`, durationMs: 9300 },
  { src: `${ASSET_BASE}/startup/development-workspace.jpeg`, fallbackSrc: `${ASSET_BASE}/startup/development-workspace.jpeg`, alt: "Code open on a monitor beside a mechanical keyboard at a development workspace", width: 900, height: 1600, rotation: 4, fit: "contain" },
  { src: `${ASSET_BASE}/startup/office-buildings.jpeg`, fallbackSrc: `${ASSET_BASE}/startup/office-buildings.jpeg`, alt: "Office towers overlooking an outdoor fountain and landscaped courtyard", width: 720, height: 1280, rotation: 2, fit: "contain" },
];

const nowNextPhotos: AboutTimelineMedia[] = [
  { src: `${ASSET_BASE}/now-next/focused-workspace.jpeg`, fallbackSrc: `${ASSET_BASE}/now-next/focused-workspace.jpeg`, alt: "An evening workspace with a laptop, keyboard and focus timer", width: 720, height: 1280, rotation: 3, fit: "contain" },
  { src: `${ASSET_BASE}/now-next/grateful-to-be-me.jpg`, fallbackSrc: `${ASSET_BASE}/now-next/grateful-to-be-me.jpg`, alt: "A child wearing sunglasses and headphones beneath the words I’m grateful to be me", width: 736, height: 923, rotation: -2, fit: "contain" },
];

export const aboutTimelineContent = {
  sectionId: "about-section",
  eyebrow: "about me",
  heading: "Moments That Shaped Me.",
  introduction: [
    "I’m Chandan Verma — a full-stack developer and product builder who believes the best way to grow is to build, break, learn, and build again.",
    "I learn by building, solve real problems, and ship meaningful work.",
  ],
  thankYou: "Thanks for being here.",
  pinnedNote: ["Still curious.", "Still building.", "Always improving."],
  closingLine:
    "Different moments. Same mindset — solve meaningful problems and ship products I’m proud to stand behind.",
  placeholderNotice:
    "Personal photographs and videos from my journey.",
  chapters: [
    {
      id: "school",
      number: "01",
      period: "Early years",
      title: "School — Curiosity Takes Shape",
      shortTitle: "Curiosity",
      description:
        "School was where my curiosity began to take shape—through classroom questions, shared experiences, and friendships that stayed with me as I found my way into technology.",
      caption: "Always questioning. Always exploring.",
      photoNotice: "Photographs from my school years.",
      cycleMs: 5100,
      initialDelayMs: 650,
      collageFallback: schoolPhotos[0],
      media: schoolPhotos,
    },
    {
      id: "college",
      number: "02",
      period: "College years",
      title: "College — Learning to Build",
      shortTitle: "Learning",
      description:
        "College introduced me to programming, while projects taught me how to use it. I learned by building, debugging, breaking things, and trying again.",
      caption: "Notes. Late nights. Small wins.",
      photoNotice: "Photographs and videos from my college years.",
      cycleMs: 5600,
      initialDelayMs: 1250,
      collageFallback: collegeMedia[0],
      media: collegeMedia,
    },
    {
      id: "internship",
      number: "03",
      period: "Jun 2024 — Nov 2024",
      title: "Internship — Entering the Industry",
      shortTitle: "Industry",
      description:
        "At ARC Document Solutions, I worked with Java automation, Jenkins CI/CD, Agile delivery, and production support — learning how professional engineering teams build and maintain software.",
      caption: "From learning code to working with real systems.",
      photoNotice: "Photographs from my internship.",
      cycleMs: 6100,
      initialDelayMs: 1850,
      collageFallback: internshipPhotos[0],
      media: internshipPhotos,
    },
    {
      id: "startup",
      number: "04",
      period: "Apr 2025 — Present",
      title: "First Startup — Becoming a Product Builder",
      shortTitle: "Product Builder",
      description:
        "At Gorain Technology, I moved beyond isolated tasks and helped build GT Restro across cloud, Electron, mobile, shared backend services, real-time workflows, payments, printing, and restaurant operations.",
      caption: "Real users. Real feedback. Real lessons.",
      photoNotice: "Photographs and video from my product-building journey.",
      cycleMs: 4700,
      initialDelayMs: 2450,
      collageFallback: startupMedia[0],
      media: startupMedia,
    },
    {
      id: "now-next",
      number: "05",
      period: "Now & Next",
      title: "Now & Next",
      shortTitle: "Now & Next",
      description:
        "I’m continuing to build stronger products and deepen my understanding of scalable systems, backend architecture, real-time applications, infrastructure, and AI workflows.",
      caption: "Grateful for the journey. Excited for what’s next.",
      photoNotice: "Focused work and a little gratitude.",
      cycleMs: 6400,
      initialDelayMs: 3050,
      collageFallback: nowNextPhotos[0],
      media: nowNextPhotos,
    },
  ] satisfies AboutTimelineChapter[],
} as const;
