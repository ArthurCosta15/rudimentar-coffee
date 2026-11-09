
import { useState } from 'react'
import menu from '../data/menu'
import './Menu.css'

function Menu() {
  const categorias = [
    ...new Set(menu.map((produto) => produto.categoria))
  ]

  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos')

  const produtosFiltrados =
    categoriaAtiva === 'Todos'
      ? menu
      : menu.filter(
          (produto) => produto.categoria === categoriaAtiva
        )

  function formatarPreco(preco) {
    return preco.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  return (
    <section className="menu-section" id="cafes">
      <div className="menu-heading">
        <p className="menu-subtitle">SABORES E EXPERIÊNCIAS</p>
        <h2>Nosso cardápio</h2>
        <p>Escolha seu próximo momento especial.</p>
      </div>

      <div className="menu-categories">
        <button
          className={categoriaAtiva === 'Todos' ? 'active' : ''}
          onClick={() => setCategoriaAtiva('Todos')}
        >
          Todos
        </button>

        {categorias.map((categoria) => (
          <button
            key={categoria}
            className={categoriaAtiva === categoria ? 'active' : ''}
            onClick={() => setCategoriaAtiva(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {produtosFiltrados.map((produto) => (
          <article className="product-card" key={produto.id}>
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="product-image"
              loading="lazy"
            />

            <div className="product-info">
              <h3>{produto.nome}</h3>
              <p>{produto.descricao}</p>
              <strong>{formatarPreco(produto.preco)}</strong>
            </div>
          </article>
        ))}
      </div>

      {produtosFiltrados.length === 0 && (
        <p className="menu-empty">
          Nenhum produto cadastrado nesta categoria.
        </p>
      )}
    </section>
  )
}

export default Menu
