// External libraries
import React from 'react'

// Styled
import {
  Container,
  Content,
  ContentImage
} from './styles'

interface QuestionsProps {
  question: string
}

const Questions: React.FC<QuestionsProps> = ({ question }) => {
  return (
    <Container>
      <ContentImage />
      <Content>
        {question}
      </Content>
    </Container>
  )
}

export default Questions
