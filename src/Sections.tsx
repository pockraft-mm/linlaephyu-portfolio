import { ArrowUpRight, Github } from 'lucide-react';
import { portfolio, type Project } from './content';

function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return <div className="section-heading">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2></div>;
}

export function Header() {
  return <header className="site-header">
    <a className="logo" href="#top" aria-label={`${portfolio.name} home`}><span className="logo-name">{portfolio.name}</span><span className="logo-title">{portfolio.title}</span></a>
    <nav className="nav" aria-label="Main navigation"><a href="#work">Projects</a><a href="#skills">Skills</a><a href="#achievements">Achievements</a><a href="#experience">Experience</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
  </header>;
}

export function Hero() {
  return <section className="portfolio-hero" data-reveal><div className="container hero-grid">
    <div className="hero-copy"><p className="eyebrow">Hello I'm</p><h1>{portfolio.name}</h1><p className="hero-role">{portfolio.focus} · {portfolio.institution}</p></div>
    <div className="hero-portrait"><img className="profile-image" src={portfolio.portrait} alt={`Portrait of ${portfolio.name}`} /></div>
    <div className="hero-intro"><p>{portfolio.introduction}</p><div className="hero-actions">
      <a className="button button-default" href="#work">View My Work <ArrowUpRight size={14} /></a>
      <a className="button button-outline" href="#contact">Contact</a>
      <a className="button button-outline" href={portfolio.cv} download="Lin-Lae-Phyu-CV.pdf">Download CV</a>
    </div></div>
  </div></section>;
}

function ProjectCard({ project }: { project: Project }) {
  return <article className="project" data-reveal><div className="project-copy">
    <div className="project-kicker"><span>{project.category}</span><span>{project.period}</span></div>
    <h3>{project.title}</h3><p>{project.description}</p>{project.technologies && <p>{project.technologies}</p>}
    <div className="project-links">
      <a href={project.github ?? `https://github.com/search?q=user%3Akyaukweiwei+${encodeURIComponent(project.title)}&type=repositories`} target="_blank" rel="noreferrer"><Github size={14} /> GitHub <ArrowUpRight size={13} /></a>
      {project.preview && <a href={project.preview} target="_blank" rel="noreferrer">Live preview <ArrowUpRight size={13} /></a>}
    </div>
  </div></article>;
}

export function SelectedWork() {
  return <section className="work section-border" id="work" data-reveal><div className="container">
    <SectionHeading title="Projects" />
    <div className="projects">{portfolio.projects.map((project) => <ProjectCard project={project} key={project.title} />)}</div>
  </div></section>;
}

export function Achievements() {
  return <section className="achievements section-border" id="achievements" data-reveal><div className="container">
    <SectionHeading eyebrow="Overview" title="Achievements" />
    <div className="achievement-list">{portfolio.achievements.map((achievement) => <article className="achievement" key={achievement.title} data-reveal>
      <p className="eyebrow">{achievement.result}</p><h3>{achievement.title}</h3><p>{achievement.detail}</p>
    </article>)}</div>
  </div></section>;
}

export function Experience() {
  return <section className="experience section-border" id="experience" data-reveal><div className="container">
    <SectionHeading eyebrow="Experience" title="Professional experience" />
    <div className="service-list">{portfolio.experience.map((item) => <div className="service" key={item.role} data-reveal>
      <span className="service-number">{item.period}</span><h3>{item.role}</h3><p>{item.detail}</p>
    </div>)}</div>
  </div></section>;
}

export function About() {
  return <section className="about section-border" id="about" data-reveal><div className="container about-grid" data-reveal>
    <div><p className="eyebrow">About</p><h2>A little about me</h2></div>
    <div><p className="about-description">{portfolio.about}</p><dl className="facts">{portfolio.education.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl></div>
  </div></section>;
}

export function Skills() {
  return <section className="services section-border" id="skills" data-reveal><div className="container">
    <SectionHeading eyebrow="Skills" title="Areas of experience" />
    <div className="service-list">{portfolio.skills.map(([label, value], index) => <div className="service" key={label} data-reveal>
      <span className="service-number">0{index + 1}</span><h3>{label}</h3><p>{value}</p>
    </div>)}</div>
    <div className="certifications"><p className="eyebrow">Certifications</p><ul>{portfolio.certifications.map((certification) => <li key={certification}>{certification}</li>)}</ul></div>
  </div></section>;
}

export function Contact() {
  return <footer className="contact" id="contact" data-reveal><div className="container contact-panel" data-reveal>
    <p className="eyebrow">Contact</p><h2>{portfolio.name}</h2>
    <p className="contact-details"><a href={`mailto:${portfolio.email}`}>{portfolio.email}</a><br /><a href={`tel:${portfolio.phone.replaceAll(' ', '')}`}>{portfolio.phone}</a></p>
    <div className="contact-bottom"><div className="social-links">
      <a href={portfolio.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
      <a href={portfolio.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>
      <a href={portfolio.telegram} target="_blank" rel="noreferrer">Telegram <ArrowUpRight size={13} /></a>
    </div><div className="footer-meta"><a className="pockraft-credit" href="https://pockraft.asia" target="_blank" rel="noreferrer">Built by Pockraft™ <ArrowUpRight size={12} /></a><span>© 2026</span></div></div>
  </div></footer>;
}
