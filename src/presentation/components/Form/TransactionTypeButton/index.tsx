import React from 'react'
import { Container, Icon, Title } from './styles'

import { TouchableOpacityProps } from 'react-native'

interface IProps extends TouchableOpacityProps {
  title: string
  type: 'up' | 'down'
  isActive: boolean
}

const TransactionTypeButton = ({ title, type, isActive, ...rest }: IProps): JSX.Element => {
  const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle'
  }

  return (
    <Container
      {...rest}
      isActive={isActive}
      type={type}
    >
      <Icon name={icons[type]} type={type} />

      <Title>
        {title}
      </Title>
    </Container>
  )
}

export { TransactionTypeButton }
