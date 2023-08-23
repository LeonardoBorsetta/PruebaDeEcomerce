import {useState, useEffect} from 'react'

export function fetchToDetail(id){

  const [descText, setDescText] = useState()
  const [atributes, setAtributes] = useState()

  useEffect(()=>{
    fetch(`https://api.mercadolibre.com/items/${id}/description`)
    .then(res => res.json())
    .then(resp => {setDescText(resp.plain_text)})

    fetch(`https://api.mercadolibre.com/items/${id}`)
    .then(res => res.json())
    .then(resp => {
      setAtributes({
        "title" : resp.title,
        "currency" : resp.currency_id,
        "pictures" : resp.pictures,
        "price" : resp.price,
        "id" : resp.id
      })})
  }
  ,[id])

  return {descText, atributes}
}