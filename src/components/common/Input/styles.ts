// External libraries
import styled from 'styled-components'

interface ContainerProps {
  width?: string
  height?: string

  marginTop?: string
  marginBottom?: string
  marignLeft?: string
  marginRight?: string

  backgroundColor?: string
  border?: string
  borderRadius?: string
}

interface InputProps {
  width?: string
  height?: string

  paddingVertical?: string
  paddingHorizontal?: string

  color?: string
  backgroundColor?: string
  border?: string
  borderBottomLeftRadius?: string
  borderBottomRightRadius?: string
  borderTopLeftRadius?: string
  borderTopRightRadius?: string
}

export const Container = styled.div<ContainerProps>`
  width: ${props => props.width};
  height: ${props => props.height};

  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marignLeft};
  margin-right: ${props => props.marginRight};

  display: flex;
  align-items: center;
  flex-direction: row;

  background-color: ${props => props.backgroundColor};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
`

export const InputLabel = styled.input<InputProps>`
  width: ${props => props.width};
  height: ${props => props.height};

  padding-left: ${props => props.paddingHorizontal};
  padding-right: ${props => props.paddingHorizontal};
  padding-top: ${props => props.paddingVertical};
  padding-bottom: ${props => props.paddingVertical};

  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  border: ${props => props.border};
  border-end-start-radius: ${props => props.borderBottomLeftRadius};
  border-end-end-radius: ${props => props.borderBottomRightRadius};
  border-start-start-radius: ${props => props.borderTopLeftRadius};
  border-start-end-radius: ${props => props.borderTopRightRadius};

  text-align: left;
  letter-spacing: 1px;

  /* ::-webkit-input-placeholder {
    color: ${props => props.color};
  } */
`
