import React from 'react'
import { TextInputProps } from 'react-native'
import { Container } from './styles'

type IProps = TextInputProps

const Input = ({ children, ...rest }: IProps) => {
  return (
    <Container {...rest} />
  )
}

export { Input }
