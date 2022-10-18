import * as React from 'react'
import { PokemonsApi } from '../../../helper/PokemonsApi'
import { LlamadaTipos } from '../../../helper/LlamadaTipos'
import { useState, useEffect } from 'react'
import './PokeGrilla.css'
import { ButtonsTypes } from '../PokeTypes/index'
import { Spinner } from '../../Spinner'
import { PaginationControlled } from '../../Pagination/PaginationControlled'
import { PokeGrillaItem } from './PokeGrillaItem'
import Stats from './Stats'

export const PokeGrilla = () => {
  const { pokeData, setPage, page } = PokemonsApi()
  const [types, setTypes] = useState('')
  const { filteredPokeData } = LlamadaTipos(types)
  const [data, setData] = useState([])

  useEffect(() => {
    types === '' ? setData(pokeData) : setData(filteredPokeData)
  }, [filteredPokeData, pokeData, types])

  // Sort original
  data.sort((a, b) => {
    return a.id - b.id
  })

  //Logica de ordenar el array por HP
  // data.sort((a, b) => {
  //   return b.stats[0]['base_stat'] - a.stats[0]['base_stat']
  // })
  const ordenarData = (posicion) => {
    data.sort((a, b) => {
      return b.stats[posicion]['base_stat'] - a.stats[posicion]['base_stat']
    })
  }

  const [clickedStat, setClickedStat] = useState('')

  switch (clickedStat) {
    case 'HP':
      ordenarData(0)
      break
    case 'ATTACK':
      ordenarData(1)
      break
    case 'DEFENSE':
      ordenarData(2)
      break
    case 'SPECIAL ATTACK':
      ordenarData(3)
      break
    case 'SPECIAL DEFENSE':
      ordenarData(4)
      break
    case 'SPEED':
      ordenarData(5)
      break
    default:
      break
  }

  return (
    <>
      {/* Filtrar por stat: HP, Attack, Defense, S.a, S.d, Speed.
      De mayor a menor --> pagination? Renderizar de a 20

      Data viene ordenada por id: del 1 al 1043
      Agarrar esa data y filtrar por el stat elegido de mayor a menor (filter con sort)

      Setear ese estado en setData 
      
      Nosotros nos traemos la data, que viene de a 20 en 58 paginas
      Se tienen que acomodar de tal forma que quede de mayor a menos por stat
      
      */}
      <h1>POKEGRID</h1>
      {data.length ? (
        <>
          <ButtonsTypes setTypes={setTypes} />
          <Stats />
          <div className="divGrid">
            <PokeGrillaItem data={data} setData={setData} />
          </div>
        </>
      ) : (
        <div className="backgroundSpinner">
          <Spinner />
        </div>
      )}
      <div
        style={{
          display: `${data.length ? 'flex' : 'none'}`,
          justifyContent: 'center',
          margin: '50px 0',
        }}
      >
        {types === '' && (
          <PaginationControlled setPage={setPage} page={page} types={types} />
        )}
      </div>
    </>
  )
}
