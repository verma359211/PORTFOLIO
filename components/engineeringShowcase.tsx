"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronDown, Code2, Cpu, Search } from "lucide-react";
import styles from "./engineeringShowcase.module.css";

const links = {
  scale: "https://scalelab.chandanverma.space",
  scaleSource: "https://github.com/verma359211/Scale-LAB",
  agent: "https://bug-triage-agent-production.up.railway.app/",
  target: "https://bug-triage-target-app-production.up.railway.app/",
  agentSource: "https://github.com/verma359211/bug-triage-agent",
};

function ExternalLink({ href, children, primary = false }: {
  href: string; children: React.ReactNode; primary?: boolean;
}) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={primary ? styles.primaryLink : styles.sourceLink}>
    {children}{primary ? <ArrowUpRight size={17} aria-hidden="true" /> : <Code2 size={16} aria-hidden="true" />}
  </a>;
}

type Screenshot = { src: string; width: number; height: number; alt: string };

function ScreenshotCollage({ name, screenshots }: { name: string; screenshots: Screenshot[] }) {
  const positions = [styles.productPrint, styles.workflowPrint, styles.resultPrint];
  return <figure className={styles.screenshotCollage} aria-label={`Screenshots of the real ${name} application`}>
    {screenshots.map((screenshot, index) => <div key={screenshot.src} className={`${styles.screenshotPrint} ${positions[index]}`}>
      <Image {...screenshot} alt={screenshot.alt} sizes="(max-width: 760px) 65vw, 33vw" />
    </div>)}
    <figcaption>A glimpse inside {name}</figcaption>
  </figure>;
}

function ScalePreview() {
  return <ScreenshotCollage name="ScaleLab" screenshots={[
    { src: "/scalelab/load-dashboard.webp", width: 1240, height: 884, alt: "ScaleLab dashboard during a running autoscaling test, showing traffic, latency, API CPU, pod counts and test controls." },
    { src: "/scalelab/grafana-autoscaling.webp", width: 1874, height: 752, alt: "Grafana monitoring dashboard showing Kubernetes pods scaling up alongside CPU, traffic, latency and memory charts." },
    { src: "/scalelab/live-telemetry.webp", width: 1240, height: 847, alt: "ScaleLab live telemetry with request throughput, response latency, rising pod counts, CPU, errors and database query latency." },
  ]} />;
}

function TracePreview() {
  return <ScreenshotCollage name="Trace" screenshots={[
    { src: "/bug-tracer/product-screen.webp", width: 1199, height: 730, alt: "Bug Tracer homepage, From bug report to root cause, beside its evidence report interface." },
    { src: "/bug-tracer/agent-workflow.webp", width: 1150, height: 636, alt: "The real agent workflow showing planning, GitHub Actions reproduction, focused retrieval and diagnosis." },
    { src: "/bug-tracer/investigation-screen.webp", width: 1040, height: 848, alt: "The completed investigation screen with successful reproduction, faulty source file, root cause, confidence and captured code evidence." },
  ]} />;
}

function TechHighlights({ name, items }: { name: string; items: { tech: string; purpose: string }[] }) {
  return <div className={styles.techHighlights}>
    <p className={styles.detailEyebrow}>THE TOOLS THAT MAKE IT WORK</p>
    <ul aria-label={`${name} standout technologies`}>
      {items.map(({ tech, purpose }) => <li key={tech}><strong>{tech}</strong><span>{purpose}</span></li>)}
    </ul>
  </div>;
}

export default function EngineeringShowcase() {
  return <section id="engineering-lab" className={styles.section} aria-labelledby="engineering-lab-heading" data-section-reveal>
    <div className={styles.sectionHeader} data-reveal-item>
      <div><p className={styles.eyebrow}><span /> PERSONAL BUILDS / ENGINEERING LAB</p>
        <h2 id="engineering-lab-heading">Built to be <em>explored.</em></h2></div>
      <p className={styles.intro}>Two featured builds. More experiments below.<br />Designed, built and shipped by me.<br /><span>Go beyond the interface. See the engineering.</span></p>
    </div>
    <div className={styles.projectGrid}>
      <article className={styles.project} aria-labelledby="scalelab-title" data-blueprint-card data-reveal-item>
        <div className={styles.cardTop}><span className={styles.projectIndex}>01 / DISTRIBUTED SYSTEMS</span><span className={styles.badge}>SOLO BUILD</span></div>
        <div className={styles.projectIntro}>
          <h3 id="scalelab-title"><span className={styles.projectIcon}><Cpu aria-hidden="true" /></span>ScaleLab</h3>
        </div>
        <ScalePreview />
        <div className={styles.projectDetails}>
          <div className={styles.plainExplanation}>
            <p className={styles.detailEyebrow}>A PLAYGROUND FOR REAL TRAFFIC</p>
            <h4>Turn up traffic. Watch it adapt.</h4>
            <p>Send thousands of requests to a real app. Watch its speed, database pressure and capacity change—and learn how scaling works.</p>
            <ol className={styles.useSteps} aria-label="How ScaleLab works"><li><span>01</span>Choose the load</li><li><span>02</span>Run a test</li><li><span>03</span>Watch it scale</li></ol>
          </div>
          <div className={styles.proofRow}><div><strong>10K <small>read reqs / sec</small></strong><span>Tested to handle up to 10,000 read requests per second</span></div><div><strong>Auto-scale</strong><span>Kubernetes adds application instances as demand rises</span></div></div>
          <TechHighlights name="ScaleLab" items={[
            { tech: "Kubernetes HPA", purpose: "Automatic scaling" },
            { tech: "k6", purpose: "Real traffic generation" },
            { tech: "Redis + PostgreSQL", purpose: "Cached reads & sharded data" },
            { tech: "Prometheus + Grafana", purpose: "App & infrastructure metrics" },
          ]} />
          <details className={styles.notes}><summary>The engineering underneath <ChevronDown size={15} aria-hidden="true" /></summary><p>I built the application, load controller, observability dashboard and infrastructure. The hardest part: running write-heavy tests without corrupting the demo store.</p><p>Isolated benchmark products, transactional stock updates, PostgreSQL shards and automatic cleanup make those experiments repeatable. React · TypeScript · Node.js · Prometheus · Grafana · Docker.</p></details>
          <div className={styles.actions}><ExternalLink href={links.scale} primary>Explore ScaleLab</ExternalLink><ExternalLink href={links.scaleSource}>Source & architecture</ExternalLink></div>
          <p className={styles.nextStep}>Open the dashboard. Explore a working system under load.</p>
        </div>
      </article>
      <article className={`${styles.project} ${styles.traceProject}`} aria-labelledby="bugtracer-title" data-blueprint-card data-reveal-item>
        <div className={styles.cardTop}><span className={styles.projectIndex}>02 / AGENTIC AI</span><span className={styles.badge}>SOLO BUILD</span></div>
        <div className={styles.projectIntro}>
          <h3 id="bugtracer-title"><span className={styles.projectIcon}><Search aria-hidden="true" /></span>Bug Tracer</h3>
        </div>
        <TracePreview />
        <div className={styles.projectDetails}>
          <div className={styles.plainExplanation}>
            <p className={styles.detailEyebrow}>A BUG REPORT BECOMES AN INVESTIGATION</p>
            <h4>A bug report in. Evidence out.</h4>
            <p>Describe what went wrong. Trace follows the code, tests backend bugs, and returns the likely cause with the exact source evidence.</p>
            <ol className={styles.useSteps} aria-label="How Bug Tracer works"><li><span>01</span>Describe a bug</li><li><span>02</span>Trace investigates</li><li><span>03</span>Inspect the proof</li></ol>
          </div>
          <div className={styles.proofRow}><div><strong>CI-verified</strong><span>Backend reproduction checked with a real failing test in GitHub Actions</span></div><div><strong>2 <small>AI calls</small></strong><span>From planning to diagnosis on the normal investigation path</span></div></div>
          <TechHighlights name="Bug Tracer" items={[
            { tech: "LangGraph", purpose: "Bounded agent workflows" },
            { tech: "GitHub Actions", purpose: "Isolated test execution" },
            { tech: "Focused code RAG", purpose: "Relevant code & validated citations" },
            { tech: "FastAPI + Groq", purpose: "Python API & AI inference" },
          ]} />
          <details className={styles.notes}><summary>The engineering underneath <ChevronDown size={15} aria-hidden="true" /></summary><p>I built the agent, retrieval pipeline, reproduction sandbox, interface and buggy target app. The hardest part: distinguishing an actual application bug from a broken generated test.</p><p>Deterministic classification, bounded repairs and validated citations keep the diagnosis grounded. Generated tests run in GitHub Actions, never on the agent server. Frontend reports return source-backed hypotheses.</p><p>Working V0 prototype. 38 agent tests and 8 target-app tests passing. Evaluation results are controlled cases, not production-user outcomes.</p></details>
          <div className={styles.actions}><ExternalLink href={links.agent} primary>Explore Bug Tracer</ExternalLink><ExternalLink href={links.agentSource}>Source & architecture</ExternalLink></div>
          <p className={styles.nextStep}>Need a bug to investigate? <a href={links.target} target="_blank" rel="noopener noreferrer">Try the deliberately buggy store <ArrowUpRight size={12} aria-hidden="true" /></a></p>
        </div>
      </article>
    </div>
  </section>;
}
