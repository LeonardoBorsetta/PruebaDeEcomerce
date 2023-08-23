import React, { useContext, useEffect, useState, useRef } from 'react'
import fetchByQuery from '../../services/fetchByQuery'
import SearchForm from '../../components/searchForm/SearchForm'
import ListOfResults from '../../components/listOfResults/ListOfResults'
import searchResultContext from '../../context/SearchResultContext'
import Loader from '../../components/loader/Loader'

function Search({params}) {

  const {resultsContext, setResultsContext} = useContext(searchResultContext)
  const [loading, setLoading] = useState(false)
  const [lowerUpper, setLowerUpper] = useState({lower : 0, upper:5})
  const prevBtn = useRef("")
  const nextBtn = useRef("")

  function handleClick(event){
    const target = event.target.name
    if(target === "next"){
      setLowerUpper({
        "lower": lowerUpper.lower <= 40 ? lowerUpper.lower+5 : 45,
        "upper": lowerUpper.upper <= 45 ? lowerUpper.upper+5 : 50,
      })
    }
    if(target === "prev"){
      setLowerUpper({
        "lower": lowerUpper.lower >= 5 ? lowerUpper.lower-5 : 0,
        "upper": lowerUpper.upper >= 10 ? lowerUpper.upper-5 : 5,
      })
    }
  }


  useEffect(()=>{
    setLoading(true)
    fetchByQuery(params.keyword).then(resp => {
      setResultsContext(resp.results)
      setLoading(false)
    })
    if(lowerUpper.lower === 45){
      nextBtn.current.disabled = true
    }else{
      nextBtn.current.disabled = false
    }
    if(lowerUpper.lower === 0){
      prevBtn.current.disabled = true
    }else{
      prevBtn.current.disabled = false
    }
  },[lowerUpper])

  return (
    <>
      <SearchForm/>
      {!resultsContext ? <h3>Busque algo rey</h3> : null}
      <br/>
      {loading ? <Loader/> : <section>
        <h3>Resultados para "{params.keyword}"</h3>
        <ListOfResults results = {resultsContext} lower={lowerUpper.lower} upper={lowerUpper.upper}/>
      </section> }
      <div className='button-container'>
        <button onClick={handleClick} name='prev' ref={prevBtn} className='prev-next-button'> {"<<<"} Previous </button>
        <p>{lowerUpper.upper / 5}</p>
        <button onClick={handleClick} name='next' ref={nextBtn} className='prev-next-button'>Next {">>>"}</button>
      </div>
    </>
  )
}

export default Search