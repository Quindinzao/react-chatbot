// External libraries
import React, { useState } from 'react'

const test: React.FC = () => {
  const [helloWorld, setHelloWorld] = useState<string[]>([])
  const createHelloWorld = () => {
    setHelloWorld([...helloWorld, 'Hello World!'])
  }

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      {helloWorld.map(hello => <h6>{hello}</h6>)}
      <button onClick={() => createHelloWorld()}>NEW NAME</button>
    </div>
  )
}

export default test
