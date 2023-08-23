import React, { useState } from 'react'
import useLocation from 'wouter/use-location'

function SearchForm() {

  const [location, setLocation] = useLocation()
  const [query, setQuery] = useState()
  const [error, setError] = useState()

  function handleSubmit(event){
    event.preventDefault()
    const query = event.target.search.value
    setLocation(`/search/${query}`,true)
    setQuery(query)
  }

  function handleChange(event){
    event.preventDefault()
    const search = event.target.value
    if(search.length <= 1){
      setError("Inserte alguna busqueda")
    }
    if(search.length < 3){
      setError("Las busquedas deben tener al menos 3 letras")
    }
    if(search.length > 3){
      setError("")
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='search-form'>
        <input type="text" name='search' value={query} onChange={handleChange}/>
        <button type="submit">Buscar</button>
      </form>
      {error ? <p>{error}</p> : null}
    </>
  )
}

export default SearchForm