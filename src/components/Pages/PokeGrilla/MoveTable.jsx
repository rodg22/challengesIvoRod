import React from 'react'

const MoveTable = ({moves}) => {
  return (
    <div>
        {moves?.map(({ move }, index) => {
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