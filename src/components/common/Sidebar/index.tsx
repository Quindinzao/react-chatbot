// External libraries
import React from 'react'

// Assets
import ReactIcon from '../../../assets/images/reactjs-icon.svg'

// Styled
import {
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
  return (
    <Container>
      <ContentImage>
        <ReactIcon />
      </ContentImage>
      <Content>
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
    </Container>
  )
}

export default Sidebar
