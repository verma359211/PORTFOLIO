export type AboutTimelineMedia = {
  src: string;
  fallbackSrc: string;
  alt: string;
  width: number;
  height: number;
  rotation: number;
};

export type AboutTimelineChapter = {
  id: string;
  number: string;
  period: string;
  title: string;
  shortTitle: string;
  description: string;
  caption: string;
  incompletePersonalDetails?: boolean;
  cycleMs: number;
  initialDelayMs: number;
  collageFallback: AboutTimelineMedia;
  media: AboutTimelineMedia[];
};

const ASSET_BASE = "/assets/about-timeline";
const CHAPTER_ASSET_BASE = `${ASSET_BASE}/chapters`;

const media = (
  filename: string,
  alt: string,
  width: number,
  height: number,
  rotation: number,
): AboutTimelineMedia => ({
  src: `${CHAPTER_ASSET_BASE}/${filename}.webp`,
  fallbackSrc: `${CHAPTER_ASSET_BASE}/${filename}.png`,
  alt,
  width,
  height,
  rotation,
});

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
    "The chapter photographs are concept placeholders and do not depict Chandan.",
  chapters: [
    {
      id: "school",
      number: "01",
      period: "Early years",
      title: "School — Curiosity Takes Shape",
      shortTitle: "Curiosity",
      description:
        "My hometown, school years, and earliest interests will be added here. This chapter represents the curiosity that eventually pulled me towards technology.",
      caption: "Always questioning. Always exploring.",
      incompletePersonalDetails: true,
      cycleMs: 5100,
      initialDelayMs: 650,
      collageFallback: media(
        "01-school-roots-collage",
        "Concept collage representing childhood curiosity",
        1500,
        1635,
        0,
      ),
      media: [
        media(
          "01-school-main",
          "Concept photograph representing childhood curiosity",
          1200,
          1354,
          -3,
        ),
        media(
          "01-school-support-kite",
          "Concept image representing early exploration",
          1200,
          1236,
          4,
        ),
        media(
          "01-school-support-notes",
          "Concept notes representing curiosity",
          1200,
          1981,
          2,
        ),
      ],
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
      incompletePersonalDetails: true,
      cycleMs: 5600,
      initialDelayMs: 1250,
      collageFallback: media(
        "02-college-learning-collage",
        "Concept collage representing college learning",
        1500,
        1640,
        0,
      ),
      media: [
        media(
          "02-college-main",
          "Concept photograph representing college learning",
          1200,
          1214,
          -1,
        ),
        media(
          "02-college-support-notebook",
          "Concept notebook representing college projects",
          1200,
          1504,
          3,
        ),
        media(
          "02-college-support-paper",
          "Concept layered study notes",
          1200,
          2009,
          -4,
        ),
      ],
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
      cycleMs: 6100,
      initialDelayMs: 1850,
      collageFallback: media(
        "03-internship-building-collage",
        "Concept collage representing professional software development",
        1500,
        1572,
        0,
      ),
      media: [
        media(
          "03-internship-main",
          "Concept image representing software development work",
          1200,
          1000,
          -2,
        ),
        media(
          "03-internship-support-code",
          "Concept code fragment representing professional development",
          1200,
          1085,
          5,
        ),
        media(
          "03-internship-support-architecture",
          "Concept architecture notes representing systems learning",
          1200,
          830,
          1,
        ),
      ],
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
      cycleMs: 4700,
      initialDelayMs: 2450,
      collageFallback: media(
        "04-startup-experience-collage",
        "Concept collage representing startup product building",
        1500,
        1581,
        0,
      ),
      media: [
        media(
          "04-startup-main",
          "Concept image representing a startup product team",
          1200,
          1008,
          -2,
        ),
        media(
          "04-startup-support-code",
          "Concept code image representing startup product development",
          1200,
          784,
          4,
        ),
        media(
          "04-startup-support-team-note",
          "Concept note representing lessons learned from real users",
          1200,
          1158,
          3,
        ),
      ],
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
      cycleMs: 6400,
      initialDelayMs: 3050,
      collageFallback: media(
        "05-now-next-collage",
        "Concept collage representing the journey ahead",
        1500,
        1313,
        0,
      ),
      media: [
        media(
          "05-now-main",
          "Concept landscape representing the journey ahead",
          1200,
          927,
          -2,
        ),
        media(
          "05-now-support-product-ui",
          "Concept product interface representing current work",
          1200,
          614,
          3,
        ),
        media(
          "05-now-support-dark-ui",
          "Concept application interface representing future projects",
          1200,
          1166,
          5,
        ),
      ],
    },
  ] satisfies AboutTimelineChapter[],
} as const;
