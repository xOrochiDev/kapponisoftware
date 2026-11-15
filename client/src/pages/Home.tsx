import { useState } from "react";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
};

// Completa estos textos y enlaces con tu información real cuando quieras.
const profileName = "Tu nombre";
const contactUrl = "";

const projects: Project[] = [
  {
    id: "01",
    title: "Nombre del proyecto",
    category: "Categoría por definir",
    description: "Resume aquí el objetivo del proyecto, tu aporte y el resultado.",
  },
  {
    id: "02",
    title: "Nombre del proyecto",
    category: "Categoría por definir",
    description: "Añade una breve descripción y los detalles que quieras destacar.",
  },
  {
    id: "03",
    title: "Nombre del proyecto",
    category: "Categoría por definir",
    description: "Reemplaza este texto con información de un proyecto real.",
  },
];

const sections = [
  { id: "inicio", label: "Resumen" },
  { id: "proyectos", label: "Proyectos" },
  { id: "perfil", label: "Perfil" },
  { id: "contacto", label: "Contacto" },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-card__preview" aria-label="Espacio para una imagen del proyecto">
        <span>IMAGEN DEL PROYECTO</span>
        <span className="project-card__preview-index">{project.id}</span>
      </div>
      <div className="project-card__details">
        <div className="project-card__meta">
          <span>{project.category}</span>
          <span>/{project.id}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <span className="project-card__pending">Enlace pendiente</span>
      </div>
    </article>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const closeMenu = (section: string) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="site-brand" href="#inicio" onClick={() => closeMenu("inicio")}>
          <span className="site-brand__mark" aria-hidden="true"><span /></span>
          <span className="site-brand__text">{profileName}<small>PORTAFOLIO</small></span>
        </a>

        <button
          className="mobile-menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Cerrar navegación" : "Abrir navegación"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>

        <nav id="primary-navigation" className={`primary-nav ${menuOpen ? "primary-nav--open" : ""}`} aria-label="Navegación principal">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={activeSection === section.id ? "primary-nav__link primary-nav__link--active" : "primary-nav__link"}
              onClick={() => closeMenu(section.id)}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </header>

      {menuOpen && <button className="menu-backdrop" type="button" aria-label="Cerrar navegación" onClick={() => setMenuOpen(false)} />}

      <main className="page-content">
        <nav className="section-tabs" aria-label="Secciones del portafolio">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={activeSection === section.id ? "section-tab section-tab--active" : "section-tab"}
              onClick={() => closeMenu(section.id)}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <section className="intro-panel" id="inicio">
          <div className="eyebrow"><span /> PORTAFOLIO PERSONAL</div>
          <div className="intro-panel__content">
            <div>
              <h1>Hola, soy <span>{profileName}.</span></h1>
              <p className="intro-panel__copy">Este es un espacio para presentar una selección de proyectos, procesos e ideas. Personaliza el texto con una breve descripción sobre ti.</p>
            </div>
            <a className="text-link" href="#proyectos">Ver proyectos <ArrowRight size={16} /></a>
          </div>
          <div className="intro-panel__footer">
            <span>Presentación</span>
            <span>Una mirada a mi trabajo y a lo que me interesa.</span>
            <span className="intro-panel__index">01 — 04</span>
          </div>
        </section>

        <section className="project-section" id="proyectos">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span /> 01 — SELECCIÓN</div>
              <h2>Proyectos</h2>
              <p>Agrega aquí tus trabajos, estudios o proyectos personales.</p>
            </div>
            <span className="section-heading__side-note">TRABAJO SELECCIONADO</span>
          </div>

          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        </section>

        <section className="info-grid" id="perfil">
          <article className="info-panel info-panel--about">
            <div className="eyebrow"><span /> 02 — PERFIL</div>
            <h2>Sobre mí</h2>
            <p className="info-panel__copy">Escribe una presentación breve: qué haces, qué te interesa y cómo sueles trabajar. Mantén el texto cercano y concreto.</p>
            <div className="placeholder-fields">
              <span>Especialidad por añadir</span>
              <span>Herramientas por añadir</span>
              <span>Intereses por añadir</span>
            </div>
          </article>

          <article className="info-panel info-panel--contact" id="contacto">
            <div className="eyebrow"><span /> 03 — CONTACTO</div>
            <h2>¿Hablamos?</h2>
            <p className="info-panel__copy">Agrega tu correo o perfil de contacto para que puedan encontrarte.</p>
            {contactUrl ? (
              <a className="contact-link" href={contactUrl} target="_blank" rel="noreferrer">Escríbeme <ArrowUpRight size={16} /></a>
            ) : (
              <span className="contact-pending">Enlace de contacto pendiente</span>
            )}
          </article>
        </section>

        <footer className="site-footer">
          <a className="site-brand site-brand--footer" href="#inicio">
            <span className="site-brand__mark" aria-hidden="true"><span /></span>
            <span className="site-brand__text">{profileName}<small>PORTAFOLIO</small></span>
          </a>
          <span>Portafolio personal · Contenido editable</span>
          <a className="footer-top-link" href="#inicio">Volver arriba ↑</a>
        </footer>
      </main>
    </div>
  );
}
