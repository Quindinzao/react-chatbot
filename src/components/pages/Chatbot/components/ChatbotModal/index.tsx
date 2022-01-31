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
  ContainerAnswer,
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
  const [id, setId] = useState(0)
  const [answer, setAnswer] = useState(null)
  const [answerList, setAnswerList] = useState([])
  const handleNextQuestion = () => {
    if (answer !== null) {
      setAnswerList([...answerList, answer])
      setAnswer(null)
      setId(id + 1)
    }
  }

  useEffect(() => {
    if (isOpen === false) {
      setId(0)
      setAnswerList([])
    }
  }, [isOpen])

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
        {chatbot[id] === chatbot[2]
          ? <Questions question={advice} />
          : <Questions question={`${chatbot[id].question}`} />
        }
        {answerList[id] && <Answers answer={answerList[id]} />}
      </Content>
      <ContainerAnswer>
        {chatbot[id].inputType === 'text' &&
          <Input
            placeholder='Answer'
            onChange={event => setAnswer(event.target.value)}
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
              onClick={() => handleNextQuestion()}
            />
          </Input>
        }
        {chatbot[id].inputType === 'button' &&
          <>
            <Button
              title='YES'
              width='160px'
              height='54px'
              color={theme.colors.text}
              colorHover={theme.colors.primary}
              backgroundColor={theme.colors.gray_700}
              backgroundColorHover={theme.colors.gray_400}
              border='none'
              fontSize='16px'
              fontWheight={600}
              onClick={() => setId(id + 1)}
            />
            <Button
              title='NO'
              width='160px'
              height='54px'
              color={theme.colors.text}
              colorHover={theme.colors.primary}
              backgroundColor={theme.colors.gray_700}
              backgroundColorHover={theme.colors.gray_400}
              border='none'
              fontSize='16px'
              fontWheight={600}
              onClick={() => setId(id + 2)}
            />
          </>
        }
        {chatbot[id].inputType === 'terminate' &&
          <Button
            title='CLOSE'
            width='160px'
            height='54px'
            color={theme.colors.text}
            colorHover={theme.colors.primary}
            backgroundColor={theme.colors.gray_700}
            backgroundColorHover={theme.colors.gray_400}
            border='none'
            fontSize='16px'
            fontWheight={600}
            onClick={() => onRequestClose()}
          />
        }
      </ContainerAnswer>
    </ReactModal>
  )
}

export default ChatbotModal
