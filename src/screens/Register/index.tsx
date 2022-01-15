import React from 'react'
import { Input } from '../../components/Form/Input'
import {
  Container,
  Form,
  Header,
  Title
} from './styles'

const Register = (): JSX.Element => {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Input
          placeholder='Nome'
        />
        <Input
          placeholder='Preço'
        />
      </Form>
    </Container>
  )
}

export { Register }