// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../styles/theme'

export const Container = styled.div`
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
`

export const ContentImage = styled.div`
  width: 100%;
  height: fit-content;

  padding-top: 4rem;
  padding-bottom: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 12.5rem;
  height: calc(100% - 5rem);

  h5 {
    margin-bottom: 32px;

    font-size: 1.5rem;
    letter-spacing: 2.5px;
    color: ${props => props.theme.colors.primary};
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
`
