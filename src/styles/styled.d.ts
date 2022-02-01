/* eslint @typescript-eslint/no-empty-interface: "off" */

// External libraries
import styled from 'styled-components'

// Styled
import theme from './theme'

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefauktTheme extends Theme {}
}
