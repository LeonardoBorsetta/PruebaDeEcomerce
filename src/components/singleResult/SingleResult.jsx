import React from 'react'
import './singleResult.css'
import { formatPrice } from '../../hook/formatPrice'
import {Link} from 'wouter'

function SingleResult({item}) {

  const itemToUse = item
  const price = formatPrice(item.price)

  return (
    <Link href={`/itemdetail/${itemToUse.id}`} className='single-article'>
      <div>
        <h3>{itemToUse.currency_id} ${price}</h3>
        <h5>{itemToUse.title.length < 35 ? itemToUse.title : `${itemToUse.title.slice(0,35)}...`}</h5>
        <p className='single-article-p'>{itemToUse.seller_address.city.name}</p>
      </div>
      <div className='ul-img-container'>
        <img src={itemToUse.thumbnail} alt={itemToUse.title} className='ul-img'/>
      </div>
    </Link>
  )
}

export default SingleResult