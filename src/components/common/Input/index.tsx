// External libraries
import React, { ReactNode } from 'react'

// Styled
import { Container, InputLabel } from './styles'

interface InputProps {
  children?: ReactNode
  onChange?: any
  placeholder?: string
  type?: string
  name?: string
  value?: any

  width?: string
  height?: string

  paddingVertical?: string
  paddingHorizontal?: string

  marginTop?: string
  marginBottom?: string
  marignLeft?: string
  marginRight?: string

  color?: string
  backgroundColor?: string
  border?: string
  borderRadius?: string
  borderBottomLeftRadius?: string
  borderBottomRightRadius?: string
  borderTopLeftRadius?: string
  borderTopRightRadius?: string
}

const Input: React.FC<InputProps> = ({
  children,
  onChange,
  placeholder,
  type,
  name,
  value,
  width,
  height,
  paddingVertical,
  paddingHorizontal,
  marginTop,
  marginBottom,
  marignLeft,
  marginRight,
  color,
  backgroundColor,
  border,
  borderRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius
}) => {
  return (
    <Container
      width={width}
      height={height}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marignLeft={marignLeft}
      marginRight={marginRight}
      backgroundColor={backgroundColor}
      border={border}
      borderRadius={borderRadius}
    >
      <InputLabel
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        width={width}
        height={height}
        paddingVertical={paddingVertical}
        paddingHorizontal={paddingHorizontal}
        color={color}
        backgroundColor={backgroundColor}
        border={border}
        borderBottomLeftRadius={borderBottomLeftRadius}
        borderBottomRightRadius={borderBottomRightRadius}
        borderTopLeftRadius={borderTopLeftRadius}
        borderTopRightRadius={borderTopRightRadius}
        style={{
          fontSize: 14,
          fontWeight: 500
        }}
      />
      {children}
    </Container>
  )
}

export default Input