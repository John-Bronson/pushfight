import React, { useState, useEffect } from 'react';

const Tile = (props) => {

  const tileDefinitions = {
    x: 'https://cdn-icons-png.flaticon.com/512/109/109602.png'
  }

  return (
    <div className="gameTile" onClick={() => alert(`row: ${props.row} col: ${props.col}`)}>
      {`${props.row}, ${props.col}`}
      {props.tile}
    </div>
  )
}

export default Tile