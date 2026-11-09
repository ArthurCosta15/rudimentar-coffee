
import './Gallery.css'

import barista from '../assets/gallery-barista.jpg'
import graos from '../assets/gallery-graos.jpg'
import latteart from '../assets/gallery-latteart.jpg'
import ambiente from '../assets/ambiente.jpg'

function Gallery() {
  const fotos = [
    {
      imagem: barista,
      titulo: 'Arte no preparo',
      descricao: 'Cuidado em cada detalhe.',
    },
    {
      imagem: graos,
      titulo: 'A essência do café',
      descricao: 'Grãos selecionados.',
    },
    {
      imagem: latteart,
      titulo: 'Uma experiência especial',
      descricao: 'Arte em cada xícara.',
    },
    {
      imagem: ambiente,
      titulo: 'Nosso espaço',
      descricao: 'Um lugar para apreciar.',
    },
  ]

  return (
    <section className="gallery" id="galeria">
      <div className="gallery-heading">
        <p className="gallery-subtitle">NOSSO UNIVERSO</p>

        <h2>
          Um pouco da nossa
          <br />
          essência.
        </h2>

        <p>
          Conheça os detalhes que fazem parte da experiência
          Rudimentar Coffee.
        </p>
      </div>

      <div className="gallery-grid">
        {fotos.map((foto, index) => (
          <article className="gallery-item" key={index}>
            <img
              src={foto.imagem}
              alt={foto.titulo}
              loading="lazy"
            />

            <div className="gallery-overlay">
              <h3>{foto.titulo}</h3>
              <p>{foto.descricao}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Gallery
