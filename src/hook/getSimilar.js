import fetchByQuery from '../services/fetchByQuery'
import {useContext, useState} from 'react'
import SearchResultContext from '../context/SearchResultContext'

export function getSimilar({thisId, title}){
  
  const {resultsContext, setResultsContext} = useContext(SearchResultContext)
  const [similarArr, setSimilarArr] = useState([])

  if(resultsContext.length === 0){
    fetchByQuery(title).then(resp => {
      setResultsContext(resp.results)
      let filterArr = [resp.results[0],resp.results[1],resp.results[2],resp.results[4]]
      setSimilarArr(filterArr)
    })
    return similarArr
  }
  if(resultsContext.length > 0){
    let filterArr = resultsContext.filter((item)=>{
      if(item.id != thisId){
        return true
      }
    })
    filterArr = [filterArr[0],filterArr[1],filterArr[2],filterArr[4]]
    return similarArr
  }
}