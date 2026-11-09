
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

function App() {
  return (
    <main>
      <header className="header">
        <a href="#inicio" className="logo">
          RUDIMENTAR COFFEE<span>®</span>
        </a>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#cafes">Nossos cafés</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <img
          className="hero-image"
          src={heroEspresso}
          alt="Café espresso da Rudimentar Coffee"
        />

        <div className="hero-content">
          <p className="subtitle">
            CAFETERIA · TORREFAÇÃO · CAFÉS ESPECIAIS
          </p>

          <h1>
            O café tem
            <br />
            sua própria história.
          </h1>

          <p className="description">
            Uma experiência artesanal em cada xícara.
          </p>

          <a href="#sobre" className="hero-button">
            Conheça nossa história
          </a>
        </div>
      </section>

      <About />
      <Menu />
      <Experience />
      <Gallery />
      <InstagramSection />
      <Location />
      <CTA />
      <Footer />
      
    </main>
  )
}

export default App
