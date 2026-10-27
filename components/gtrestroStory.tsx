"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Cloud, Code2, Database, Layers3, Monitor, ReceiptText, ShieldCheck, Smartphone, Utensils, Wifi, WifiOff, Zap } from "lucide-react";
import styles from "./gtrestroStory.module.css";

const chapters = [
  { id: "floor", number: "01", title: "Connect the whole floor.", hint: "Counter → kitchen → customer", Icon: Utensils },
  { id: "speed", number: "02", title: "Build for the rush.", hint: "Fast APIs. Separate tenants.", Icon: Zap },
  { id: "offline", number: "03", title: "Keep the bills moving.", hint: "Even when the network doesn’t.", Icon: WifiOff },
] as const;

const contributions = [
  <>I built the <strong>POS, Orders, Kitchen and Table modules</strong>—with role-based views and real-time Socket.IO sync.</>,
  <>I built and scaled the <strong>multi-tenant backend</strong>, then removed database bottlenecks with optimized queries and caching.</>,
  <>I engineered the <strong>offline-first desktop app</strong> and retry-safe sync queues, so a lost connection didn’t stop billing.</>,
];

function ProductView() {
  return <div className={styles.productView}>
    <div className={styles.deviceScene}>
      <div className={styles.desktop}>
        <div className={styles.browserBar}><span className={styles.windowDots} aria-hidden="true"><i /><i /><i /></span><span>GT Restro / Point of sale</span><Monitor size={12} aria-hidden="true" /></div>
        <Image src="/gtrestro/pos-overview.webp" alt="GT Restro’s real POS interface: menu items, table orders, kitchen tickets and billing in one workspace" width={2190} height={1232} sizes="(min-width: 1000px) 58vw, 90vw" className={styles.desktopImage} />
      </div>
      <div className={styles.phone}>
        <Image src="/gtrestro/pos-mobile-light.png" alt="GT Restro POS running on a mobile screen" width={464} height={1024} sizes="(min-width: 1000px) 11vw, 20vw" />
      </div>
      <span className={styles.deviceAnnotation}><Smartphone size={12} aria-hidden="true" /> One product. Across screens.</span>
    </div>
    <div className={styles.floorFlow} aria-label="Restaurant workflow: order, kitchen, table, bill">
      {[{ label: "Order", Icon: ReceiptText }, { label: "Kitchen", Icon: Utensils }, { label: "Table", Icon: Layers3 }, { label: "Bill", Icon: Check }].map(({ label, Icon }, index) => <div key={label} className={styles.flowStep}><span><Icon size={16} aria-hidden="true" /></span><small>{label}</small>{index < 3 && <ArrowRight className={styles.flowArrow} size={14} aria-hidden="true" />}</div>)}
    </div>
  </div>;
}

function PerformanceView() {
  return <div className={styles.performanceView}>
    <div className={styles.latencyMetric}><p>PEAK-HOUR API LATENCY</p><div><span>Seconds</span><ArrowRight aria-hidden="true" /><strong>~200<small>ms</small></strong></div><small>Pagination · query optimization · Redis caching</small></div>
    <div className={styles.architecture} aria-label="Tenant-scoped requests reach shared backend services, Redis, MySQL and RabbitMQ jobs">
      <div className={styles.tenantRow}>{["Restaurant A", "Restaurant B", "Restaurant C"].map(name => <span key={name}>{name}</span>)}</div>
      <div className={styles.branchLines} aria-hidden="true"><span /><ArrowDown size={16} /></div>
      <div className={styles.apiNode}><ShieldCheck size={20} aria-hidden="true" /><span>Tenant-scoped API<small>Node.js + Express · isolated data access</small></span></div>
      <div className={styles.branchLines} aria-hidden="true"><ArrowDown size={16} /><span /></div>
      <div className={styles.serviceRow}><span><Zap size={18} aria-hidden="true" />Redis<small>Hot reads</small></span><span><Database size={18} aria-hidden="true" />MySQL<small>Source of truth</small></span><span><Layers3 size={18} aria-hidden="true" />RabbitMQ<small>Background jobs</small></span></div>
    </div>
    <p className={styles.diagramNote}>Architecture sketch · shared infrastructure, tenant-isolated data</p>
  </div>;
}

function OfflineView() {
  const [offline, setOffline] = useState(true);
  return <div className={styles.offlineView}>
    <div className={styles.networkControl}><span className={`${styles.networkStatus} ${offline ? styles.disconnected : ""}`}>{offline ? <WifiOff size={15} /> : <Wifi size={15} />}{offline ? "Network unavailable" : "Connection restored"}</span><button type="button" onClick={() => setOffline(value => !value)}>{offline ? "Restore connection" : "Simulate an outage"}<ArrowRight size={13} aria-hidden="true" /></button></div>
    <div className={styles.syncDiagram}>
      <div className={styles.localDevice}><Monitor size={33} strokeWidth={1.3} aria-hidden="true" /><strong>Counter keeps billing.</strong><span>Electron + SQLite</span><div className={styles.receipt}><ReceiptText size={20} aria-hidden="true" /><div><i /><i /><i /></div><span><Check size={12} aria-hidden="true" /> Saved locally</span></div></div>
      <div className={styles.syncBridge}><span className={styles.syncLine} data-offline={offline} aria-hidden="true" /><span>{offline ? <WifiOff size={18} aria-hidden="true" /> : <Check size={18} aria-hidden="true" />}</span><small>{offline ? "Retry-safe queue" : "Sync resumes"}</small><div className={styles.queueDots} aria-hidden="true">{[0, 1, 2].map(dot => <i key={dot} data-synced={!offline} />)}</div></div>
      <div className={styles.cloudNode}><Cloud size={45} strokeWidth={1.2} aria-hidden="true" /><strong>Cloud backend</strong><span>{offline ? "Waiting for connection" : "Queued changes sync safely"}</span></div>
    </div>
    <p className={styles.offlineCaption} aria-live="polite">{offline ? "Internet down. Service carries on." : "Back online. The queue picks up where it left off."}</p>
    <p className={styles.diagramNote}>Interactive illustration of the sync design · no live orders</p>
  </div>;
}

export default function GTRestroStory() {
  const [chapter, setChapter] = useState(0);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [cycle, setCycle] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);
  const section = useRef<HTMLElement>(null);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const current = chapters[chapter];

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(motion.matches);
    const updateVisibility = () => setPageVisible(!document.hidden);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio >= .08), { threshold: [0, .08], rootMargin: "0px 0px -10% 0px" });
    if (section.current) observer.observe(section.current);
    updateMotion();
    updateVisibility();
    motion.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (!inView || paused || interacting || reducedMotion || !pageVisible) return;
    const timer = window.setTimeout(() => setChapter(value => (value + 1) % chapters.length), 4000);
    return () => window.clearTimeout(timer);
  }, [chapter, cycle, inView, paused, interacting, reducedMotion, pageVisible]);

  function selectChapter(index: number) {
    setChapter(index);
    setCycle(value => value + 1);
  }

  function moveTab(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (["ArrowDown", "ArrowRight"].includes(event.key)) next = (index + 1) % chapters.length;
    else if (["ArrowUp", "ArrowLeft"].includes(event.key)) next = (index + chapters.length - 1) % chapters.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = chapters.length - 1;
    else return;
    event.preventDefault();
    setPaused(true);
    selectChapter(next);
    tabs.current[next]?.focus();
  }

  const autoPlaying = inView && !paused && !interacting && !reducedMotion && pageVisible;

  return <section ref={section} id="experience" className={styles.section} aria-labelledby="startup-experience-heading">
    <div id="gtrestro-case-study" className={styles.inner}>
      <div className={styles.chapterHeader}><span><i aria-hidden="true" /> CHAPTER 01 / MY FIRST STARTUP</span><span>GORAIN TECHNOLOGY · GT RESTRO</span></div>
      <div className={styles.storyGrid}>
        <div className={styles.narrative}>
          <div className={styles.roleBadge}><Code2 size={14} aria-hidden="true" /> Founding Engineer <span>Full Stack Developer</span></div>
          <h2 id="startup-experience-heading">From beta.<br />To the <em>dinner rush.</em></h2>
          <p className={styles.intro}>My first startup. A restaurant operating system. The challenge: help turn a beta into a product teams could rely on through a busy service.</p>
          <p className={styles.teamNote}><span aria-hidden="true">CV</span> My contribution, as part of a <strong>5-engineer team.</strong></p>
          <div className={styles.chapterTabs} role="tablist" aria-label="Explore my GT Restro contribution" data-auto-playing={autoPlaying}>
            {chapters.map(({ id, number, title, hint, Icon }, index) => <button key={id} id={`restro-tab-${id}`} type="button" role="tab" aria-selected={chapter === index} aria-controls={`restro-panel-${id}`} tabIndex={chapter === index ? 0 : -1} ref={element => { tabs.current[index] = element; }} onFocus={event => { if (event.currentTarget.matches(":focus-visible")) setPaused(true); }} onKeyDown={event => moveTab(event, index)} onClick={() => selectChapter(index)}><span className={styles.tabNumber}>{number}</span><span><strong>{title}</strong><small>{hint}</small></span><Icon size={18} aria-hidden="true" />{chapter === index && autoPlaying && <span key={`${chapter}-${cycle}`} className={styles.chapterProgress} aria-hidden="true" />}</button>)}
          </div>
          {!reducedMotion && <button type="button" className={styles.cycleControl} onClick={() => setPaused(value => !value)} aria-label={paused ? "Resume automatic chapter changes" : "Pause automatic chapter changes"}>{paused ? "▶ Play chapters" : "Ⅱ Pause chapters"}<span>4s / chapter</span></button>}
          <a className={styles.visitLink} href="https://gtrestro.com" target="_blank" rel="noopener noreferrer">Explore GT Restro <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
        <div className={styles.showcase} data-blueprint-card onFocusCapture={() => setInteracting(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setInteracting(false); }}>
          <div className={styles.showcaseHeader}><div className={styles.brand}><span>GT</span><strong>Restro<span>RESTAURANT OPERATING SYSTEM</span></strong></div><span className={styles.productLabel}>{chapter === 0 ? "THE PRODUCT" : "THE ENGINEERING"}</span></div>
          <div className={styles.panelStack}>{chapters.map(({ id }, index) => <div key={id} id={`restro-panel-${id}`} role="tabpanel" aria-labelledby={`restro-tab-${id}`} tabIndex={chapter === index ? 0 : -1} hidden={chapter !== index} className={styles.panel}>
            {index === 0 ? <ProductView /> : index === 1 ? <PerformanceView /> : <OfflineView />}
          </div>)}</div>
          <div className={styles.contributionCaption}><span>{current.number} / MY PART</span><div className={styles.captionStack}>{contributions.map((text, index) => <p key={index} hidden={chapter !== index}>{text}</p>)}</div></div>
          <div className={styles.platformStrip}><span><Monitor size={12} aria-hidden="true" /> Web</span><span><Smartphone size={12} aria-hidden="true" /> Mobile</span><span><Database size={12} aria-hidden="true" /> Desktop + local data</span><span className={styles.stageCount}>0{chapter + 1} / 03</span></div>
        </div>
      </div>
      <div className={styles.scaleRail} aria-label="Platform scale during my work on GT Restro"><p>BUILT FOR<br /><strong>REAL SERVICE.</strong></p><div><strong>30,000+</strong><span>orders / day</span></div><div><strong>250+</strong><span>tenants on shared infrastructure</span></div><div><strong>200+</strong><span>daily active users</span></div><span className={styles.railAnnotation}>PRODUCT SCALE<br />DURING MY TENURE ↗</span></div>
      <details className={styles.engineeringNotes}><summary><span><Code2 size={15} aria-hidden="true" /> A little deeper into the engineering</span><ChevronDown size={17} aria-hidden="true" /></summary><div className={styles.notesGrid}><div><ShieldCheck size={20} aria-hidden="true" /><h3>Trust at checkout.</h3><p>Razorpay integration with verified webhooks and reconciliation. JWT, OAuth and RBAC, with tenant isolation across data access and middleware.</p></div><div><Layers3 size={20} aria-hidden="true" /><h3>Beta → production.</h3><p>Within our five-engineer team, I fixed 200+ bugs, added RabbitMQ background jobs, and helped reduce peak-hour downtime by roughly 20–30% through auto-scaling.</p></div><div><Code2 size={20} aria-hidden="true" /><h3>Across the stack.</h3><p>React · Node.js · Express · MySQL · Redis · Socket.IO · Electron · SQLite · RabbitMQ · Docker</p><small>Scale and performance figures reflect the work-period results provided in my résumé.</small></div></div></details>
      <div className={styles.endNote}><span>FIRST STARTUP. REAL RESPONSIBILITY. A LOT OF BUILDING.</span><a href="#engineering-lab" data-scroll-target="engineering-lab">Next: my personal builds <ArrowDown size={14} aria-hidden="true" /></a></div>
    </div>
  </section>;
}
