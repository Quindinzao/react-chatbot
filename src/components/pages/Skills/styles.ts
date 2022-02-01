// External libraries
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

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
`

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 16px;
`

export const ContentCard = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  h5 {
    text-transform: uppercase;
  }

  p {
    margin-top: 16px;
    text-align: left;
  }
`
