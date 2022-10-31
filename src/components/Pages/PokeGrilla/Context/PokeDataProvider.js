import React from 'react'
import { PokeDataContext } from './PokeDataContext'
import { useState } from 'react'

const PokeDataProvider = ({children}) => {

    const [showSinglePokemon, setShowSinglePokemon] = useState()


  return (
    <PokeDataContext.Provider value={{setShowSinglePokemon, showSinglePokemon}}>
        { children }
    </PokeDataContext.Provider>
  )
}

export default PokeDataProvider