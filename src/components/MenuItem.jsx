import React from 'react'

export default function MenuItem({ id, name, category, price, description, isVegetarian }) {
  return (
    <article className="menu-item" aria-labelledby={`dish-${id}`}>
      <div className="menu-item-head">
        <h3 id={`dish-${id}`}>{name}</h3>
        <div className="price">₹{price.toFixed(2)}</div>
      </div>

      <p className="desc">{description}</p>

      <div className="meta">
        <span className="category">{category}</span>
        {isVegetarian && <span className="veg-badge">Vegetarian</span>}
      </div>
    </article>
  )
}
