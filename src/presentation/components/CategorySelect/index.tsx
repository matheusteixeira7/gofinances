import React from 'react'
import { Category, Container, Icon } from './styles'

interface IProps {
  title: string
}

export const CategorySelect = ({ title }: IProps): JSX.Element => {
  return (
    <Container>
      <Category>{title}</Category>
      <Icon name='chevron-down' />
    </Container>
  )
}
