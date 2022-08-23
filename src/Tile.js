import React, { useState, useEffect } from 'react';

const Tile = (props) => {

  const tileDefinitions = {
    x: 'https://cdn-icons-png.flaticon.com/512/109/109602.png'
  }

  if (props.tile === 'x') {
    return <div><img src={tileDefinitions.props.tile}></img></div>
  } else {
    console.log(`props.tile is ${props.tile}`)
    return (
      <div>
        {props.tile}
      </div>
    )
  }
}

export default Tile