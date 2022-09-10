import React from 'react'
import{useSelector} from 'react-redux'

export const Catalog = () => {
  const {catalog} =useSelector(state=>state.catalog)
  return (
    <div className='catalogs'>
      <h1>Catalog</h1>
      <div className="catalogs__row">
        {
          catalog.map(card=>(
            <div className="card" key={card.id}>
              <div className="card__item">
              <h2 className="card__title">{card.name}</h2>
              <div className="card__image">
                <img src={card.img} alt={card.name} />
              </div>
            <p className="card__description">{card.description}</p>
              </div>
            
          </div> 
          ))
        }
        
      </div>
      </div>
  )
}
