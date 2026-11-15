import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleHelp,
  Gamepad2,
  Menu,
  MessageCircle,
  Package,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  icon: typeof Sparkles;
  tone: string;
  featured?: boolean;
};

// Reemplaza este valor por la invitación permanente de tu servidor de Discord.
// Mientras esté vacío, las compras llevan a la sección Comunidad con un aviso claro.
const DISCORD_INVITE_URL = "";

const products: Product[] = [
  {
    id: "01",
    name: "Producto destacado",
    description: "Agrega aquí una descripción breve para contar qué incluye.",
    price: "$—",
    category: "Más popular",
    icon: Sparkles,
    tone: "violet",
    featured: true,
  },
  {
    id: "02",
    name: "Producto esencial",
    description: "Un espacio para explicar el valor de este producto.",
    price: "$—",
    category: "Digital",
    icon: Zap,
    tone: "blue",
  },
  {
    id: "03",
    name: "Producto especial",
    description: "Personaliza el texto, el precio y la imagen cuando quieras.",
    price: "$—",
    category: "Edición limitada",
    icon: Gamepad2,
    tone: "orange",
  },
];

const navItems = [
  { href: "#inicio", label: "Inicio", icon: Sparkles },
  { href: "#productos", label: "Productos", icon: Package },
  { href: "#comunidad", label: "Comunidad", icon: MessageCircle },
];

function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon;
  const href = DISCORD_INVITE_URL || "#comunidad";

  return (
    <article className={`product-card product-card--${product.tone}`}>
      <div className="product-art" aria-hidden="true">
        <div className="product-art__orbit product-art__orbit--one" />
        <div className="product-art__orbit product-art__orbit--two" />
        <div className="product-art__tile">
          <Icon size={35} strokeWidth={1.6} />
        </div>
        <span className="product-art__spark product-art__spark--one">✳</span>
        <span className="product-art__spark product-art__spark--two">✦</span>
        {product.featured && <span className="product-art__label">Favorito de la comunidad</span>}
      </div>
      <div className="product-card__body">
        <div className="product-card__meta">
          <span className="eyebrow">{product.category}</span>
          <span className="product-card__id">#{product.id}</span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-card__bottom">
          <div>
            <span className="price-label">Desde</span>
            <strong className="product-price">{product.price}</strong>
          </div>
          <a
            className="buy-button"
            href={href}
            target={DISCORD_INVITE_URL ? "_blank" : undefined}
            rel={DISCORD_INVITE_URL ? "noreferrer" : undefined}
            aria-label={`Consultar ${product.name} en Discord`}
          >
            Comprar <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="store-shell">
      <aside className={`sidebar ${menuOpen ? "sidebar--open" : ""}`}>
        <a className="brand" href="#inicio" onClick={() => setMenuOpen(false)}>
          <span className="brand__mark"><span /></span>
          <span className="brand__name">TU COMUNIDAD<span>MARKETPLACE</span></span>
        </a>

        <div className="sidebar__label">EXPLORAR</div>
        <nav className="sidebar-nav" aria-label="Navegación principal">
          {navItems.map(({ href, label, icon: Icon }, index) => (
            <a
              key={href}
              href={href}
              className={`sidebar-nav__link ${index === 0 ? "sidebar-nav__link--active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              <Icon size={17} strokeWidth={1.8} />
              <span>{label}</span>
              {index === 0 && <span className="sidebar-nav__dot" />}
            </a>
          ))}
        </nav>

        <div className="sidebar__community">
          <div className="community-orb"><MessageCircle size={18} /></div>
          <p>Lo mejor pasa en comunidad.</p>
          <a href="#comunidad">Conócenos <ArrowUpRight size={14} /></a>
        </div>

        <div className="sidebar__footer">
          <span className="status-dot" />
          <span>Conectado a Discord</span>
          <span className="sidebar__footer-mark">v1.0</span>
        </div>
      </aside>

      {menuOpen && <button className="sidebar-scrim" aria-label="Cerrar menú" onClick={() => setMenuOpen(false)} />}

      <main className="main-content">
        <header className="topbar">
          <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <div className="breadcrumb"><span>Comunidad</span><span className="breadcrumb__slash">/</span><strong>Marketplace</strong></div>
          <a className="topbar__discord" href="#comunidad"><MessageCircle size={16} /> <span>Ir al Discord</span><ArrowUpRight size={14} /></a>
        </header>

        <div className="page-wrap">
          <section className="hero" id="inicio">
            <div className="hero__content">
              <div className="hero__pill"><span className="hero__pill-dot" /> EL MARKETPLACE DE LA COMUNIDAD</div>
              <h1>Encuentra tu<br /><span>siguiente favorito.</span></h1>
              <p className="hero__copy">Productos digitales, beneficios y extras creados para nuestra comunidad. Elige el tuyo y termina tu compra en Discord.</p>
              <div className="hero__actions">
                <a className="primary-button" href="#productos">Explorar productos <ArrowRight size={17} /></a>
                <a className="text-button" href="#comunidad">Conocer la comunidad <ArrowDownRight size={16} /></a>
              </div>
              <div className="hero__trust">
                <span><ShieldCheck size={15} /> Compra con confianza</span>
                <span className="hero__trust-separator" />
                <span><MessageCircle size={15} /> Atención en Discord</span>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="hero-art__glow" />
              <div className="hero-art__ring hero-art__ring--outer" />
              <div className="hero-art__ring hero-art__ring--inner" />
              <div className="hero-art__card hero-art__card--back"><span className="hero-art__mini-icon">✦</span><span>EXCLUSIVO</span></div>
              <div className="hero-art__card hero-art__card--front">
                <div className="hero-art__card-top"><span className="hero-art__symbol"><Sparkles size={23} /></span><span className="hero-art__dots">•••</span></div>
                <div className="hero-art__card-title">TU PRÓXIMA<br /><b>VENTA ÉPICA</b></div>
                <div className="hero-art__card-line" />
                <div className="hero-art__card-foot"><span>COMMUNITY DROP</span><ArrowUpRight size={16} /></div>
              </div>
              <span className="hero-art__float hero-art__float--one">✦</span>
              <span className="hero-art__float hero-art__float--two">✳</span>
              <div className="hero-art__caption"><span className="hero-art__caption-dot" /> NUEVOS DROPS, MISMA COMUNIDAD</div>
            </div>
            <a href="#productos" className="hero__scroll" aria-label="Desplazarse a productos"><span /> DESLIZA PARA EXPLORAR</a>
          </section>

          <section className="catalog-section" id="productos">
            <div className="section-heading">
              <div>
                <div className="section-kicker"><span /> EL CATÁLOGO</div>
                <h2>Hecho para <span>los tuyos.</span></h2>
                <p>Una selección pensada para disfrutar más de la comunidad.</p>
              </div>
              <div className="catalog-heading-note"><span className="catalog-heading-note__icon"><Package size={17} /></span><span><strong>Catálogo abierto</strong><small>Productos disponibles para ti</small></span></div>
            </div>

            <div className="product-grid">
              {products.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
            <p className="catalog-note"><CircleHelp size={14} /> ¿Tienes dudas? Escríbenos en Discord antes de comprar.</p>
          </section>

          <section className="community-banner" id="comunidad">
            <div className="community-banner__pattern" aria-hidden="true" />
            <div className="community-banner__icon"><MessageCircle size={23} /></div>
            <div className="community-banner__copy">
              <div className="section-kicker section-kicker--light"><span /> MÁS QUE UNA TIENDA</div>
              <h2>La comunidad va primero.</h2>
              <p>Únete al servidor para conocer los productos, resolver dudas y completar tu compra.</p>
              {!DISCORD_INVITE_URL && <span className="invite-status"><span /> Enlace de invitación pendiente de configurar</span>}
            </div>
            <a className="community-banner__button" href={DISCORD_INVITE_URL || "#comunidad"} target={DISCORD_INVITE_URL ? "_blank" : undefined} rel={DISCORD_INVITE_URL ? "noreferrer" : undefined}>
              {DISCORD_INVITE_URL ? "Entrar al servidor" : "Configura tu invitación"} <ArrowUpRight size={17} />
            </a>
          </section>

          <footer className="site-footer">
            <a className="brand brand--footer" href="#inicio"><span className="brand__mark"><span /></span><span className="brand__name">TU COMUNIDAD<span>MARKETPLACE</span></span></a>
            <span>Un espacio hecho por y para la comunidad.</span>
            <a href="#inicio" className="back-to-top">Volver arriba ↑</a>
          </footer>
        </div>
      </main>
    </div>
  );
}
