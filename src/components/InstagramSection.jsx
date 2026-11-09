
import './InstagramSection.css'

import barista from '../assets/gallery-barista.jpg'
import latteart from '../assets/gallery-latteart.jpg'
import ambiente from '../assets/ambiente.jpg'

function InstagramSection() {
  return (
    <section className="instagram-section" id="instagram">
      <div className="instagram-content">
        <p className="instagram-subtitle">
          ACOMPANHE NOSSO UNIVERSO
        </p>

        <h2>
          O café também
          <br />
          acontece por lá.
        </h2>

        <p className="instagram-description">
          Acompanhe nossos cafés, experiências, novidades
          e momentos especiais no Instagram.
        </p>

        <a
          href="https://www.instagram.com/rudimentarcoffee/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-button"
        >
          <span>◎</span> Acompanhe no Instagram
        </a>

        <p className="instagram-handle">
          @rudimentarcoffee
        </p>
      </div>

      <div className="instagram-images">
        <img src={barista} alt="Barista preparando café" loading="lazy" />
        <img src={latteart} alt="Arte em café" loading="lazy" />
        <img src={ambiente} alt="Ambiente da cafeteria" loading="lazy" />
      </div>
    </section>
  )
}

export default InstagramSection
