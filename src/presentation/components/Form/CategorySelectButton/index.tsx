import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import { Category, Container, Icon, RectButtonContainer } from './styles'
interface IProps extends RectButtonProps {
  title: string
  onPress: () => void
}

export const CategorySelectButton = ({ title, ...rest }: IProps) => {
  return (
    <Container>
      <RectButtonContainer {...rest}>
        <Category>{title}</Category>
        <Icon name="chevron-down" />
      </RectButtonContainer>
    </Container>
  )
}
