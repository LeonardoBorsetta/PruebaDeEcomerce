import React from 'react'
import SingleResult from '../singleResult/SingleResult'

function ListOfResults({results, lower, upper}) {

  const resultToShow = results.filter((item,index)=>{
    return lower <= index && index < upper
  })

  return (
    <ul className='result-ul'>
          {resultToShow?.map(item => {
            return (
              <SingleResult item={item} key={item.id}/>
            )
          })}
        </ul>
  )
}

export default ListOfResults