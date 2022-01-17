import React, { useState } from 'react'
import { CategorySelect } from '../../components/CategorySelect'
import { Button } from '../../components/Form/Button'
import { Input } from '../../components/Form/Input'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'
import {
  Container,
  Form,
  Header,
  Title,
  Fields,
  TransactionTypes
} from './styles'

const Register = (): JSX.Element => {
  const [transactionType, setTransactionType] = useState('')

  const handleTransactionTypeSelect = (type: 'up' | 'down'): void => {
    setTransactionType(type)
  }

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

          <TransactionTypes>
            <TransactionTypeButton
              type='up'
              title='Entrada'
              onPress={() => handleTransactionTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <TransactionTypeButton
              type='down'
              title='Saída'
              onPress={() => handleTransactionTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionTypes>

          <CategorySelect title='Categoria' />
        </Fields>

        <Button title='Enviar' />
      </Form>

    </Container>
  )
}

export { Register }
