
import './CTA.css'
import ctaImage from '../assets/cta-dark.jpg'

function CTA() {
  return (
    <section
      className="cta" id="contato"
      style={{ backgroundImage: `url(${ctaImage})` }}
    >
      <div className="cta-overlay">
        <div className="cta-content">
          <span className="cta-label">RUDIMENTAR COFFEE®</span>

          <h2>
            Seu próximo café
            <br />
            especial está aqui.
          </h2>

          <p>
            Venha conhecer nosso espaço e viver uma experiência
            diferente a cada xícara.
          </p>

          <a
            href="https://wa.me/5581997950037?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Rudimentar%20Coffee."
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Fale conosco
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
