// External libraries
import React, { useState } from 'react'

const test: React.FC = () => {
  // var list = []
  var item = '<h6 style={{ marginBottom: 16 }}>Hello World!</h6>'
  // const handleClick = () => {
  //   list.push(item)
  // }

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      {/* <h6 style={{ marginBottom: 16 }}>
        Hello World!
      </h6> */}

      <p>{item}</p>

      <button onClick={() => null}>click me</button>
    </div>
  )
}

export default test
