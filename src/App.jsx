import { ArrowDown, Coffee, Flame, MapPin, MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import './App.css'
import heroEspresso from './assets/hero-espresso.jpg'
import About from './components/About'
import Menu from './components/Menu'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import InstagramSection from './components/InstagramSection'
import Location from './components/Location'
import CTA from './components/CTA'
import Footer from './components/Footer'

const WHATSAPP_URL =
  'https://wa.me/5581997950037?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Rudimentar%20Coffee.'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 40)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  return () => window.removeEventListener('scroll', onScroll)
}, [])
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
        <div className="header-inner container">
          <a href="#inicio" className="logo" onClick={closeMenu}>
            RUDIMENTAR <span>COFFEE®</span>
          </a>

          <nav id="main-nav" className={`nav ${menuOpen ? 'open' : ''}`}>
            <a href="#inicio" onClick={closeMenu}>Início</a>
            <a href="#sobre" onClick={closeMenu}>Sobre</a>
            <a href="#cafes" onClick={closeMenu}>Cafés</a>
            <a href="#experiencia" onClick={closeMenu}>Experiência</a>
            <a href="#localizacao" onClick={closeMenu}>Localização</a>
            <a href="#contato" onClick={closeMenu}>Contato</a>
            <a
              href={WHATSAPP_URL}
              className="nav-cta"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <MessageCircle size={16} aria-hidden="true" />
              Fale pelo WhatsApp
            </a>
          </nav>

          <a
            href={WHATSAPP_URL}
            className="header-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={14} aria-hidden="true" />
            Fale conosco
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <img
            className="hero-image"
            src={heroEspresso}
            alt="Barista servindo espresso em uma xícara"
            fetchPriority="high"
          />

          <div className="hero-body container">
            <div className="hero-content">
              <p className="subtitle">
                CAFETERIA <i>•</i> TORREFAÇÃO <i>•</i> CAFÉS ESPECIAIS
              </p>

              <h1>
                Café especial.
                <br />
                <span className="accent">Experiências que ficam.</span>
              </h1>

              <p className="description">
                <strong>RUDIMENTAR COFFEE®</strong> — cafeteria, torrefação e
                cafés especiais em Taquaritinga do Norte.
              </p>

              <div className="hero-actions">
                <a href="#sobre" className="btn btn-primary">
                  Conheça a Rudimentar
                  <ArrowDown size={14} aria-hidden="true" />
                </a>

                <a
                  href={WHATSAPP_URL}
                  className="btn btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={14} aria-hidden="true" />
                  Fale pelo WhatsApp
                </a>
              </div>

              <ul className="hero-features">
                <li>
                  <Coffee size={15} aria-hidden="true" />
                  Cafés especiais
                </li>
                <li>
                  <Flame size={15} aria-hidden="true" />
                  Torrefação própria
                </li>
                <li>
                  <MapPin size={15} aria-hidden="true" />
                  Taquaritinga do Norte - PE
                </li>
              </ul>
            </div>
          </div>
        </section>

        <About />
        <Menu />
        <Experience />
        <Gallery />
        <InstagramSection />
        <Location />
        <CTA />
      </main>

      <Footer />
    </>
  )
}

export default App