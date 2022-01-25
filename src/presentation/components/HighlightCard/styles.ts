import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

interface ITypeProps {
  type: 'up' | 'down' | 'total'
}

const Container = styled.View<ITypeProps>`
  background-color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.secondary : theme.colors.shape};
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px ${RFValue(42)}px;
  margin-right: 16px;
`

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const Title = styled.Text<ITypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.text_dark};
`

const Icon = styled(Feather)<ITypeProps>`
  font-size: ${RFValue(30)}px;

  ${({ type }) =>
    type === 'up' &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `}

  ${({ type }) =>
    type === 'down' &&
    css`
      color: ${({ theme }) => theme.colors.attention};
    `}

  ${({ type }) =>
    type === 'total' &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}
`

const Footer = styled.View``
const Amount = styled.Text<ITypeProps>`
  font-size: ${RFValue(32)}px;
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-top: 38px;
`

const LastTransaction = styled.Text<ITypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.text};
`

export { Container, Header, Title, Icon, Footer, Amount, LastTransaction }
