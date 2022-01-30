// External libraries
import React from 'react'

const chatbot = {
  1: {
    question: 'Hello! Whats your name?',
    inputType: 'text'
  },
  2: {
    question: 'Do you need some random advice?',
    inputType: 'button'
  },
  3: {
    question: null
  },
  4: {
    question: 'The true sage takes advice from life ☮'
  }
}

const test: React.FC = () => {

  const user = {
    name: '',
    old: 0,
    status: ''
  }

  const handleSend = () => {
    console.log('user: ', user)
  }

  return (
    <div>
      {/* <input onChange={event => user.name = event.target.value} />
      <input type='number' onChange={event => user.old = parseInt(event.target.value)} />
      <input onChange={event => user.status = event.target.value} /> */}
      <input onChange={event => user.name = event.target.value} />
      <input type='number' onChange={event => user.old = parseInt(event.target.value)} />
      <input onChange={event => user.status = event.target.value} />
      <button type='button' onClick={handleSend}>Enviar</button>
      <p>{user.name || 'null'}</p>
    </div>
  )
}

export default test
