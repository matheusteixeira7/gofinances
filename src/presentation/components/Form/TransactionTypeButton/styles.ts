import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface IIconsProps {
  name: string
  type: 'up' | 'down'
}

interface IContainerProps {
  isActive: boolean
  type: 'up' | 'down'
}

export const Container = styled(TouchableOpacity)<IContainerProps>`
  width: 48%;
  padding: 16px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: 1.5px solid;
  border-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.transparent : theme.colors.text};
  border-radius: 5px;

  background-color: ${({ theme, isActive, type }) =>
    isActive && type === 'up'
      ? theme.colors.success_light
      : isActive && type === 'down'
      ? theme.colors.attention_light
      : theme.colors.transparent};
`

export const Icon = styled(Feather)<IIconsProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
  color: ${({ theme, type }) =>
    type === 'up' ? theme.colors.success : theme.colors.attention};
`

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_dark};
`
