// External libraries
import React, { useEffect, useState } from 'react'

// Components
import Sidebar from '../../common/Sidebar'
import Card from '../../common/Card'

// Services
import api from '../../../services/api'

// Styled
import theme from '../../../styles/theme'
import {
  SidebarContent,
  Container,
  Content,
  ContentGrid
} from './styles'

const Skills: React.FC = () => {
  const [skills, setSkills] = useState({})

  useEffect(() => {
    api
      .get('/skills')
      .then((response) => setSkills(response.data))
      .catch((err) => {
        console.error('Oops! An error occurred in ', err)
      })
  }, [])

  const numbers = [1, 2, 3, 4, 5]

  console.log('skills', skills)

  return (
    <Container>
      <SidebarContent>
        <Sidebar skills={true} />
      </SidebarContent>
      <Content>
        <ContentGrid>
          {numbers.map( (number) => <li key = { number.toString() }>{ number }</li>)}
          <Card
            width='240px'
            height='280px'
            backgroundColor={theme.colors.gray_700}
            border={`1px solid ${theme.colors.primary}`}
            borderRadius='36px'
          />
        </ContentGrid>
      </Content>
    </Container>
  )
}

export default Skills
