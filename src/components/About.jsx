
import './About.css'
import aboutPreparo from '../assets/about-preparo.jpg'

function About() {
  return (
    <section className="about" id="sobre">
      <div className="about-image-container">
        <img
          src={aboutPreparo}
          alt="Preparação artesanal de café"
          className="about-image"
        />
      </div>

      <div className="about-content">
        <p className="about-subtitle">
          NOSSA ESSÊNCIA
        </p>

        <h2>
          Mais que café,
          <br />
          uma experiência.
        </h2>

        <p className="about-description">
          Acreditamos que cada xícara tem algo especial para contar.
          Valorizamos o cuidado no preparo, a qualidade dos grãos
          e os pequenos detalhes que transformam o café em uma
          experiência única.
        </p>

        <a href="#cafes" className="about-link">
          Descubra nossos cafés →
        </a>
      </div>
    </section>
  )
}

export default About
