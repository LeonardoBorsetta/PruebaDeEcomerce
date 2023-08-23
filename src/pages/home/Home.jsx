import React from 'react'
import './home.css'
import Navigation from '../../components/navigation/Navigation'
import SearchForm from '../../components/searchForm/SearchForm'
import HomeSection from '../../components/homeSection/HomeSection'

function Home() {
  
  return (
    <section>
      <Navigation/>
      <SearchForm/>
      <HomeSection cat={"Deportes"} filter={3}/>
      <HomeSection cat={"Tecnologia"} filter={3}/>
      <HomeSection cat={"Electodomesticos"} filter={3}/>
    </section>
  )
}

export default Home