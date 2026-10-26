import { ArrowRight, ArrowUpRight, BookOpen, Check, FileText, Github, Keyboard, Play, Search, Sparkles } from "lucide-react";
import { workbenchProjects, type WorkbenchProject } from "../lib/workbenchProjects";
import styles from "./workbenchProjects.module.css";

function ProjectSketch({ project }: { project: WorkbenchProject }) {
  return <div className={`${styles.sketch} ${styles[project.id === "lab-rag" ? "ragSketch" : project.id === "video-mcq" ? "videoSketch" : "typingSketch"]}`} aria-hidden="true">
    <div className={styles.sketchLabel}><span>CONCEPT SKETCH</span>{project.id === "lab-rag" ? <Search size={12} /> : project.id === "video-mcq" ? <Play size={12} /> : <Keyboard size={12} />}</div>
    {project.id === "lab-rag" ? <div className={styles.ragFlow}>
      <div className={styles.documents}><span /><span /><span><FileText size={21} /><i /><i /><i /></span></div>
      <ArrowRight size={16} className={styles.sketchArrow} />
      <div className={styles.retrievalNode}><Search size={18} /><span>retrieve<br /><small>+ rerank</small></span></div>
      <ArrowRight size={16} className={styles.sketchArrow} />
      <div className={styles.answer}><Sparkles size={14} /><i /><i /><span><Check size={10} /> source context</span></div>
    </div> : project.id === "video-mcq" ? <div className={styles.videoFlow}>
      <div className={styles.videoPlayer}><Play size={23} fill="currentColor" strokeWidth={1} /><span /><small>VIDEO → TRANSCRIPT</small></div>
      <ArrowRight size={16} className={styles.sketchArrow} />
      <div className={styles.quiz}><span><BookOpen size={12} /> KNOWLEDGE CHECK</span>{["A", "B", "C"].map((option, index) => <div key={option} data-correct={index === 1}><b>{option}</b><i />{index === 1 && <Check size={10} />}</div>)}</div>
    </div> : <div className={styles.typingScene}>
      <div><span className={styles.typed}>make every </span><span className={styles.cursor} /><span>keystroke count</span></div>
      <div className={styles.typingTools}><span>15 / 30 / 60s</span><span>WPM + ACCURACY</span><kbd>tab ↵</kbd></div>
    </div>}
  </div>;
}

export default function WorkbenchProjects() {
  return <section id="more-projects" className={styles.section} aria-labelledby="more-projects-heading" data-section-reveal>
    <div className={styles.continuation} data-reveal-item>
      <div><p className={styles.eyebrow}><span /> THE WORKBENCH CONTINUES / 03—05</p><h2 id="more-projects-heading">A few more things I’ve built.</h2></div>
      <p>More explorations in retrieval,<br />learning and real-time interaction.</p>
    </div>
    <div className={styles.grid}>
      {workbenchProjects.map(project => <article key={project.id} className={styles.card} data-blueprint-card data-reveal-item aria-labelledby={`${project.id}-title`}>
        <div className={styles.cardHeader}><span>{project.number} / {project.category}</span><Github size={14} aria-hidden="true" /></div>
        <ProjectSketch project={project} />
        <div className={styles.copy}><h3 id={`${project.id}-title`}>{project.title}</h3><p className={styles.description}>{project.description}</p><p className={styles.highlight}>{project.highlight}</p>
          <div className={styles.technologies} aria-label={`${project.title} technologies`}>{project.technologies.map(technology => <span key={technology}>{technology}</span>)}</div>
          <div className={styles.actions}><a href={project.repository} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${project.title} source on GitHub`}>Explore source <ArrowUpRight size={15} aria-hidden="true" /></a><a href={project.secondary.href} target="_blank" rel="noopener noreferrer">{project.secondary.label}<ArrowUpRight size={12} aria-hidden="true" /></a></div>
        </div>
      </article>)}
    </div>
    <div className={styles.closing}><span>FROM INFRASTRUCTURE TO INTERACTION. ALWAYS BUILDING.</span><a href="https://github.com/verma359211" target="_blank" rel="noopener noreferrer"><Github size={14} aria-hidden="true" /> More on GitHub <ArrowUpRight size={13} aria-hidden="true" /></a></div>
  </section>;
}
