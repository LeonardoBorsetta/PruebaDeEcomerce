const url = `https://api.mercadolibre.com/sites/MLA/search?q=`

export default function  fetchByQuery(query){
  const result = fetch(url+query).then(res => res.json())
  return result
}