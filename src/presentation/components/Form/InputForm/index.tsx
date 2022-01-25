import React from 'react'
import { Control, Controller } from 'react-hook-form'
import { TextInputProps } from 'react-native'

import { Input } from '../Input'
import { Container, Error } from './styles'

interface IProps extends TextInputProps {
  control: Control
  name: string
  error: string
}

export const InputForm = ({ control, name, error, ...rest }: IProps) => {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
        name={name}
      />
      {error != null && <Error>{error}</Error>}
    </Container>
  )
}
