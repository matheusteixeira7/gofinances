import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import { Container, RectButtonContainer, Title } from './styles'

interface IProps extends RectButtonProps {
  title: string
  onPress: () => void
}

const Button = ({ title, ...rest }: IProps) => {
  return (
    <Container>
      <RectButtonContainer {...rest}>
        <Title>{title}</Title>
      </RectButtonContainer>
    </Container>
  )
}

export { Button }
