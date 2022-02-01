// External libraries
import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const SidebarContent = styled.div`
  width: 17.5rem;
  height: 100%;

  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  background-color: transparent;

  @media screen and (max-width: 768px) {
    width: fit-content;
    height: fit-content;
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    text-align: center;
    margin-top: 40px;
  }

  h5 {
    text-align: center;
    margin-top: 1.5rem;
    line-height: 32px;
  }
`
