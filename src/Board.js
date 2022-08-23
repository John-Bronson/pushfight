import React, { useState, useEffect } from 'react';
import Tile from './Tile.js'

const Board = () => {

  let x = '❌'
  let l = '┃'
  let r = '┃'
  let o = '❤️'

  const [boardState, setBoardState] = useState(
    [
      [x, x, x, x, x, x], //row 0
      [x, x, o, o, x, x], //row 1
      [l, o, o, o, x, x], //row 2
      [l, o, o, o, o, r], //row 3
      [l, o, o, o, o, r], //row 4
      [l, o, o, o, o, r], //row 5
      [l, o, o, o, o, r], //row 6
      [x, x, o, o, o, r], //row 7
      [x, x, o, o, x, x], //row 8
      [x, x, x, x, x, x], //row 9
    ]
  )
  return (
    <div>
      <p>Game Board will go here</p>
      {
        boardState.map((row) =>
          row.map((tile, index) =>
            <Tile tile={tile} key={index} />
          ))}
    </div>
  )
}

export default Board