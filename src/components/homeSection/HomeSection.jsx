import React, {useEffect, useState}  from 'react'
import ListOfResults from '../../components/listOfResults/ListOfResults'
import fetchByQuery from '../../services/fetchByQuery'
import Loader from '../../components/loader/Loader'


function HomeSection({cat, lower, upper}) {

  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)
  

  useEffect(()=>{
      fetchByQuery(cat).then(resp => {
        setLoading(true)
        const arr2 = resp.results.filter((item,index)=>{
          return lower <= index && index < upper;
        })
        setResults(arr2)
        setLoading(false)
      })
  },[cat, lower, upper])

  return (
    <div className='homeSection-conatiner'>
      <h3>{cat}</h3>
      {loading ? <Loader/> : <ListOfResults results={results}/>}
    </div>
  )
}

export default HomeSection