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
  ContentGrid,
  ContentCard
} from './styles'

const Skills: React.FC = () => {
  const [skills, setSkills] = useState([])
  const [position, setPosition] = useState(0)

  useEffect(() => {
    api
      .get('/skills')
      .then((response) => setSkills(response.data))
      .catch((err) => {
        console.error('Oops! An error occurred in ', err)
      })
  }, [])

  console.log('skills', skills)

  return (
    <Container>
      <SidebarContent>
        <Sidebar skills={true} />
      </SidebarContent>
      <Content>
        <ContentGrid>
          {skills.map((skill, key) =>
            <Card
              key={key}
              width='240px'
              height='280px'
              paddingHorizontal='20px'
              paddingVertical='32px'
              backgroundColor={theme.colors.gray_700}
              border={`1px solid ${theme.colors.primary}`}
              borderRadius='36px'
            >
              <ContentCard>
                <h5>{skill.title}</h5>
                <p>{skill.description}</p>
              </ContentCard>
            </Card>
          )}
        </ContentGrid>
      </Content>
    </Container>
  )
}

export default Skills
