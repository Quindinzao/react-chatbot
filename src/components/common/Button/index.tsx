// External libraries
import React from 'react'

// Styled
import {
  Container
} from './styles'

interface ButtonProps {
  title: string
  onClick?: () => void

  width?: string
  height?: string

  isActive?: boolean

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

  fontSize?: string
  fontWheight?: number
}

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  width,
  height,
  isActive,
  paddingVertical,
  paddingHorizontal,
  marginTop,
  marginBottom,
  marignLeft,
  marginRight,
  color,
  colorHover,
  backgroundColor,
  backgroundColorHover,
  border,
  borderRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  fontSize,
  fontWheight
}) => {
  return (
    <Container
      width={width}
      height={height}
      isActive={isActive}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marignLeft={marignLeft}
      marginRight={marginRight}
      paddingVertical={paddingVertical}
      paddingHorizontal={paddingHorizontal}
      backgroundColor={backgroundColor}
      backgroundColorHover={backgroundColorHover}
      border={border}
      borderRadius={borderRadius}
      borderBottomLeftRadius={borderBottomLeftRadius}
      borderBottomRightRadius={borderBottomRightRadius}
      borderTopLeftRadius={borderTopLeftRadius}
      borderTopRightRadius={borderTopRightRadius}
      color={color}
      colorHover={colorHover}
      style={{
        fontSize: fontSize,
        fontWeight: fontWheight
      }}
      onClick={onClick}
    >
      {title}
    </Container>
  )
}

export default Button
