import React from 'react'
import { Button } from '../../components/Form/Button'
import { Input } from '../../components/Form/Input'
import {
  Container,
  Form,
  Header,
  Title,
  Fields
} from './styles'

const Register = (): JSX.Element => {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input
            placeholder='Nome'
          />
          <Input
            placeholder='Preço'
          />
        </Fields>

        <Button title='Enviar' />
      </Form>

    </Container>
  )
}

export { Register }
