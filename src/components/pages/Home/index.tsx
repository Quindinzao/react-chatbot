// External libraries
import React from 'react'

// Components
import Sidebar from '../../common/Sidebar'

// Styled
import {
  SidebarContent,
  Container,
  Content
} from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <SidebarContent>
        <Sidebar home={true} />
      </SidebarContent>
      <Content>
        <h1>ReactJS Structure</h1>
        <p>A ReactJS + Next.js structure made by Quindinzão.</p>
      </Content>
    </Container>
  )
}

export default Home
