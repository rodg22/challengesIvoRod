import React from 'react'

const Stats = ({setClickedStat}) => {

  const handleChange = (e) => {
    setClickedStat(e.target.innerText)
  }

  const handleReset = (e) => {
    setClickedStat('')
  }

  
  return (
    <>
        <ul style={{backgroundColor: "black"}}>
            <li onClick={handleChange}>HP</li>
            <li onClick={handleChange}>ATTACK</li>
            <li onClick={handleChange}>DEFENSE</li>
            <li onClick={handleChange}>S.ATTACK</li>
            <li onClick={handleChange}>S.DEFENSE</li>
            <li onClick={handleChange}>SPEED</li>
            <li onClick={handleReset}>ID</li>
        </ul>
    </>
  )
}

export default Stats