import React, {useState, useRef, useEffect} from 'react'
import Navigation from '../../components/navigation/Navigation'
import SearchForm from '../../components/searchForm/SearchForm'
import HomeSection from '../../components/homeSection/HomeSection'
import './category.css'

function Category({params}) {

  const [lowerUpper, setLowerUpper] = useState({lower : 0, upper:5})
  let cat = params.category.slice(0,1).toUpperCase() + params.category.slice(1)
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
      <Navigation/>
      <SearchForm/>
      <HomeSection cat={cat} lower={lowerUpper.lower} upper={lowerUpper.upper}/>
      <div className='button-container'>
        <button onClick={handleClick} name='prev' ref={prevBtn} className='prev-next-button'> {"<<<"} Previous </button>
        <p>{lowerUpper.upper / 5}</p>
        <button onClick={handleClick} name='next' ref={nextBtn} className='prev-next-button'>Next {">>>"}</button>
      </div>
    </>
  )
}

export default Category