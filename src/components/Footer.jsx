
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>RUDIMENTAR COFFEE<span>®</span></h2>
          <p>
            Café especial, boas experiências
            e momentos que merecem ser apreciados.
          </p>
        </div>

        <div className="footer-links">
          <h3>Navegação</h3>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#cardapio">Cardápio</a>
          <a href="#experiencia">Experiência</a>
          <a href="#contato">Contato</a>
        </div>

        <div className="footer-contact">
          <h3>Contato</h3>
          <a
            href="https://www.instagram.com/rudimentarcoffee/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://wa.me/5581997950037"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>

          <p>Taquaritinga do Norte - PE</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Rudimentar Coffee®. Todos os direitos reservados.</p>
        <p>Feito com carinho e café.</p>
      </div>
    </footer>
  )
}

export default Footer
