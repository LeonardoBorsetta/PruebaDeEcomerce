import React from 'react'
import './similarProducts.css'
import { getSimilar } from '../../hook/getSimilar'
import Loader from '../loader/Loader'
import { formatPrice } from '../../hook/formatPrice'
import { Link } from 'wouter'

function SimilarProducts({thisId, title}) {

  const similarProdArr = getSimilar({thisId, title})

  return (
    <div className='similar-products-container'>
      <h3>Productos Similares</h3>
      {similarProdArr.length > 0 
      ? <>
            <ul className='similar-product-list'>
              {similarProdArr.map((prod)=>{
                if(prod == undefined){
                  return
                }
                const price = formatPrice(prod.price)
                return (
                <Link href={`/itemdetail/${prod.id}`} key={prod.id}>
                  <li>
                    <img src={prod.thumbnail} alt={prod.title + "image"} className='similar-prod-img'/>
                    <h5>{prod.title}</h5>
                    <h3>{prod.currency_id} $ {price}</h3>
                  </li>
                </Link>)
              })}
            </ul>
        </>
      : <Loader/>}
    </div>
  )
}

export default SimilarProducts