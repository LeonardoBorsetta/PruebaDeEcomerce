import React from 'react'
import './itemDetailHeader.css'
import { formatPrice } from '../../hook/formatPrice'

function ItemDetailHeader({atr}) {

  const price = atr ? formatPrice(atr.price) : undefined

  return (
    <div className="header">
      <h2>{atr.currency} $ {price}</h2>
      <h3>{atr.title}</h3>
  </div>
  )
}

export default ItemDetailHeader