import React from 'react'

const MoveTable = ({moves}) => {
  return (
    <div>
        {moves?.map(({ move }, index) => {
            console.log(move)
          return (
            <p style={{ color: "black", width: `100%` }} key={index}>
              {move.name}
            </p>
          );
        })}
  </div>
  )
}

export default MoveTable