// External libraries
import Head from 'next/head'
import React from 'react'

// Components
import Body from '../../components/pages/Chatbot'

const Chatbot: React.FC = () => {
  return (
    <div>
      <>
        <Head>
          <title>Chatbot</title>
        </Head>
        <Body />
      </>
    </div>
  )
}

export default Chatbot
