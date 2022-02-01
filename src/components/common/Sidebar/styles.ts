// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../styles/theme'

interface SidebarProps {
  isActive: boolean
}

export const Container = styled.div<SidebarProps>`
  width: 15rem;
  height: 100vh;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;

  position: fixed;
  top: 0;
  left: 0;

  background-color: ${theme.colors.gray_700};

  @media only screen and (max-width: 768px) {
    width: ${(props) => props.isActive
      ? '100%'
      : 'fit-content'
    };
    height: ${(props) => props.isActive
      ? '100%'
      : 'fit-content'
    };
    background-color: ${(props) => props.isActive
      ? theme.colors.gray_700
      : 'transparent'
    };
  }
`

export const ContentImage = styled.div<SidebarProps>`
  width: 100%;
  height: fit-content;

  padding-top: 4rem;
  padding-bottom: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    display: ${(props) => props.isActive
      ? 'flex'
      : 'none'
    };
  }
`

export const Content = styled.div<SidebarProps>`
  width: 12.5rem;
  height: calc(100% - 5rem);

  h5 {
    margin-bottom: 2rem;

    font-size: 1.5rem;
    letter-spacing: 2.5px;
    color: ${props => props.theme.colors.primary};
  }

  @media only screen and (max-width: 768px) {
    width: 100%;

    align-items: center;
    flex-direction: column;

    display: ${(props) => props.isActive
      ? 'flex'
      : 'none'
    };
  }
`

interface LinkProps {
  isActive?: boolean
}

export const Link = styled.a<LinkProps>`
  width: 100%;
  height: 3rem;

  margin-top: 5px;
  padding-left: 12px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  border: none;
  border-radius: 10px 0px 0px 10px;
  background-color: transparent;

  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 2.5px;
  line-height: 18px;
  text-decoration: none;
  color: ${(props) => props.isActive
    ? theme.colors.primary
    : theme.colors.text
  };

  cursor: pointer;
  transition: 0.4s;

  &:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.gray_400};
  }

  @media only screen and (max-width: 768px) {
    width: fit-content;

    padding-right: 12px;

    align-items: center;

    border-radius: 10px;
  }
`

export const ButtonMenu = styled.button`
  width: 64px;
  height: 64px;

  display: none;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;

  font-size: 2rem;
  color: ${theme.colors.primary};

  position: fixed;
  top: 12px;
  left: 12px;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`
