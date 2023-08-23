import React, { useState } from 'react'

const Context = React.createContext()

export function SearchResultContextProvider({children}){

  const [resultsContext, setResultsContext] = useState([])

  return <Context.Provider value = {{resultsContext, setResultsContext}}>
    {children}
  </Context.Provider>
}

export default Context