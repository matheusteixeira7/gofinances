import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { Container, Icon, Title } from './styles'

interface IProps extends TouchableOpacityProps {
  title: string
  type: 'up' | 'down'
  isActive: boolean
}

const TransactionTypeButton = ({ title, type, isActive, ...rest }: IProps) => {
  const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
  }

  return (
    <Container {...rest} isActive={isActive} type={type}>
      <Icon name={icons[type]} type={type} />

      <Title>{title}</Title>
    </Container>
  )
}

export { TransactionTypeButton }
