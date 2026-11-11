
import './Location.css'

function Location() {
  return (
    <section className="location" id="localizacao">
      <div className="location-content">
        <p className="location-subtitle">
          VENHA NOS VISITAR
        </p>

        <h2>
          Seu próximo café
          <br />
          está aqui.
        </h2>

        <div className="location-details">
          <div>
            <span>ENDEREÇO</span>
            <p>R. Vig. Tejo, 34 - Centro</p>
            <p>Taquaritinga do Norte - PE</p>
          </div>

          <div>
            <span>FUNCIONAMENTO</span>
            <p>Terça a sexta: 08h às 21h</p>
            <p>Sábado e domingo: 08h às 22h</p>
            <p>Segunda-feira: fechado</p>
          </div>
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=+Rudimentar+Coffee+R.+Vig.+Tejo+34+Taquaritinga+do+Norte+PE"
          target="_blank"
          rel="noopener noreferrer"
          className="location-button"
        >
          Como chegar →
        </a>
      </div>
    </section>
  )
}

export default Location
