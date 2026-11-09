
import './Experience.css'
import torrefacao from '../assets/torrefacao.jpg'

function Experience() {
  return (
    <section className="experience" id="experiencia">
      <div className="experience-content">
        <p className="experience-subtitle">
          NOSSA EXPERIÊNCIA
        </p>

        <h2>
          Do grão à xícara,
          <br />
          com propósito.
        </h2>

        <p className="experience-description">
          Cada detalhe importa. Da escolha dos grãos ao preparo,
          valorizamos processos que respeitam a essência do café
          e proporcionam experiências especiais.
        </p>

        <div className="experience-features">
          <div className="feature">
            <span>01</span>
            <div>
              <h3>Grãos selecionados</h3>
              <p>Qualidade e cuidado na escolha de cada grão.</p>
            </div>
          </div>

          <div className="feature">
            <span>02</span>
            <div>
              <h3>Preparo artesanal</h3>
              <p>Respeito aos detalhes em cada xícara.</p>
            </div>
          </div>

          <div className="feature">
            <span>03</span>
            <div>
              <h3>Torrefação</h3>
              <p>Processos que valorizam as características do café.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="experience-image-container">
        <img
          src={torrefacao}
          alt="Processo de torrefação dos grãos de café"
          className="experience-image"
          loading="lazy"
        />
      </div>
    </section>
  )
}

export default Experience
