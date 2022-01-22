import React from 'react'
import { Category, Container, Icon } from './styles'
interface IProps {
  title: string
  onPress: () => void
}

export const CategorySelectButton = ({ title, onPress }: IProps) => {
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name='chevron-down' />
    </Container>
  )
}
