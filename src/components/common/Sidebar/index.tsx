// External libraries
import React, { useState } from 'react'

// Assets
import ReactIcon from '../../../assets/images/reactjs-icon.svg'

// Styled
import {
  ButtonMenu,
  Container,
  Content,
  ContentImage,
  Link
} from './styles'

interface SidebarProps {
  home?: boolean
  chatbot?: boolean
  skills?: boolean
}

const Sidebar: React.FC<SidebarProps> = ({
  home,
  chatbot,
  skills
}) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <Container isActive={isActive}>
      <ContentImage isActive={isActive}>
        <ReactIcon />
      </ContentImage>
      <Content isActive={isActive}>
        <h5>MENU</h5>
        <Link
          href='/'
          isActive={home}
        >
          HOME
        </Link>
        <Link
          href='/chatbot'
          isActive={chatbot}
        >
          CHATBOT
        </Link>
        <Link
          href='/skills'
          isActive={skills}
        >
          SKILLS
        </Link>
      </Content>
      <ButtonMenu onClick={() => setIsActive(!isActive)}>
        &#9776;
      </ButtonMenu>
    </Container>
  )
}

export default Sidebar
