import React from 'react'
import { TextInputProps } from 'react-native'
import { Container } from './styles'

type IProps = TextInputProps

const Input = ({ children, ...rest }: IProps): JSX.Element => {
  return (
    <Container {...rest} />
  )
}

export { Input }
