// External libraries
import styled from 'styled-components'

export const ContainerTitle = styled.div`
  width: 100%;
  max-height: 20rem;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-align: center;
  color: ${props => props.theme.colors.primary};
`

export const Content = styled.div`
  width: 100%;
  max-height: 20rem;
  height: 100%;

  margin-top: 1.25rem;
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  overflow-x: auto;
`

export const ContainerAnswer = styled.div`
  width: 100%;
  max-height: 20rem;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
