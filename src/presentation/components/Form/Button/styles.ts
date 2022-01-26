import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

type IProps = RectButtonProps

export const Container = styled.View<IProps>`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
`

export const RectButtonContainer = styled(RectButton)`
  width: 100%;
  padding: 18px;
  align-items: center;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
`
