// External libraries
import React from 'react'

// Styled
import {
  Container,
  Content,
  ContentImage
} from './styles'

interface AnswersProps {
  answer: string
}

const Answers: React.FC<AnswersProps> = ({ answer }) => {
  return (
    <Container>
      <Content>
        {answer}
      </Content>
      <ContentImage />
    </Container>
  )
}

export default Answers
