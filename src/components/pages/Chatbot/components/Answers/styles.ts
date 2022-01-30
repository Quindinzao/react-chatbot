// External libraries
import styled from 'styled-components'

// Styled
import theme from '../../../../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 72px;

  margin-top: 12px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const Content = styled.div`
  width: calc(100% - 84px);
  height: 100%;
  min-height: 72px;

  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 16px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  border-radius: 12px;
  background-color: ${theme.colors.gray_300};

  font-size: 18px;
`

export const ContentImage = styled.div`
  width: 72px;
  height: 72px;

  border-radius: 72px;
  background-color: ${theme.colors.text};
`
