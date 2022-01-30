// External libraries
import styled from 'styled-components'

interface ButtonProps {
  width?: string
  height?: string

  paddingVertical?: string
  paddingHorizontal?: string

  marginTop?: string
  marginBottom?: string
  marignLeft?: string
  marginRight?: string

  color?: string
  colorHover?: string
  backgroundColor?: string
  backgroundColorHover?: string
  border?: string
  borderRadius?: string
  borderBottomLeftRadius?: string
  borderBottomRightRadius?: string
  borderTopLeftRadius?: string
  borderTopRightRadius?: string
}

export const Container = styled.button<ButtonProps>`
  width: ${props => props.width};
  height: ${props => props.height};

  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marignLeft};
  margin-right: ${props => props.marginRight};
  padding-left: ${props => props.paddingHorizontal};
  padding-right: ${props => props.paddingHorizontal};
  padding-top: ${props => props.paddingVertical};
  padding-bottom: ${props => props.paddingVertical};

  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  border-end-start-radius: ${props => props.borderBottomLeftRadius};
  border-end-end-radius: ${props => props.borderBottomRightRadius};
  border-start-start-radius: ${props => props.borderTopLeftRadius};
  border-start-end-radius: ${props => props.borderTopRightRadius};

  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;

  cursor: pointer;

  transition: .5s;

  &:hover {
    background-color: ${props => props.backgroundColorHover};
    color: ${props => props.colorHover};
  }
`
