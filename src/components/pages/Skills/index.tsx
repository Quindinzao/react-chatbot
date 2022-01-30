// External libraries
import React from 'react'

// Components
import Sidebar from '../../common/Sidebar'
import Card from '../../common/Card'

// Styled
import theme from '../../../styles/theme'
import {
  SidebarContent,
  Container,
  Content,
  ContentGrid
} from './styles'

const Skills: React.FC = () => {
  return (
    <Container>
      <SidebarContent>
        <Sidebar skills={true} />
      </SidebarContent>
      <Content>
        <ContentGrid>
          <Card
            width='240px'
            height='360px'
            backgroundColor={theme.colors.gray_700}
            border={`2px solid ${theme.colors.primary}`}
            borderRadius='10px'
          />
          <Card
            width='240px'
            height='360px'
            backgroundColor={theme.colors.gray_700}
            border={`2px solid ${theme.colors.primary}`}
            borderRadius='10px'
          />
          <Card
            width='240px'
            height='360px'
            backgroundColor={theme.colors.gray_700}
            border={`2px solid ${theme.colors.primary}`}
            borderRadius='10px'
          />
          <Card
            width='240px'
            height='360px'
            backgroundColor={theme.colors.gray_700}
            border={`2px solid ${theme.colors.primary}`}
            borderRadius='10px'
          />
          <Card
            width='240px'
            height='360px'
            backgroundColor={theme.colors.gray_700}
            border={`2px solid ${theme.colors.primary}`}
            borderRadius='10px'
          />
        </ContentGrid>
      </Content>
    </Container>
  )
}

export default Skills
