// External libraries
import React, { useEffect, useState } from 'react'
import ReactModal from 'react-modal'

// Components
import Answers from '../Answers'
import Questions from '../Questions'
import Input from '../../../../common/Input'
import Button from '../../../../common/Button'

// Utils
import { chatbot } from '../../../../../utils/chatbot'

// Styled
import {
  ContainerInput,
  ContainerTitle,
  Content,
  Title
} from './styles'
import theme from '../../../../../styles/theme'

interface ChatbotModalProps {
  advice: string
  isOpen: boolean
  onRequestClose: () => void
}

const ChatbotModal: React.FC<ChatbotModalProps> = ({
  advice,
  isOpen,
  onRequestClose
}) => {
  const userAnswers = {
    name: '',
    randomAdvice: ''
  }
  const [id, setId] = useState(1.0)
  const nextQuestion = () => {
    setId(id + 1)
    userAnswers.name = 'ola'
  }
  const handleAnswerQuestion = () => console.log('userAnswer: ', userAnswers)

  useEffect(() => {
    console.log(userAnswers.name)
  })

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className='react-modal-content'
      overlayClassName='react-modal-overlay'
    >
      <ContainerTitle>
        <Title>WELCOME TO CHATBOT!</Title>
      </ContainerTitle>
      <Content>
        <Questions question={`${chatbot[id].question}`} />
        <Answers answer={userAnswers.name} />
      </Content>
      <ContainerInput>
        <Input
          placeholder='Answer'
          onChange={event => userAnswers.name = event.target.value}
          type='text'
          name='answer'
          width='100%'
          height='64px'
          paddingHorizontal='16px'
          color={theme.colors.text}
          backgroundColor={theme.colors.gray_300}
          border='none'
          borderRadius='12px'
          borderBottomLeftRadius='12px'
          borderTopLeftRadius='12px'
        >
          <Button
            title='send'
            height='100%'
            paddingHorizontal='16px'
            color={theme.colors.text}
            colorHover={theme.colors.primary}
            backgroundColor={theme.colors.gray_300}
            backgroundColorHover={theme.colors.gray_700}
            border='none'
            borderTopRightRadius='12px'
            borderBottomRightRadius='12px'
            fontSize='14px'
            onClick={() => handleAnswerQuestion()}
          />
        </Input>
      </ContainerInput>
    </ReactModal>
  )
}

export default ChatbotModal
