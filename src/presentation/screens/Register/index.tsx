import React, { useState } from 'react'
import { Modal } from 'react-native'
import { CategorySelectButton } from '../../components/CategorySelectButton'

import { Button } from '../../components/Form/Button'
import { Input } from '../../components/Form/Input'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'
import { CategorySelect } from '../CategorySelect'
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
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  })

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

          <CategorySelectButton
            title='Categoria'
            onPress={() => setCategoryModalOpen(true)}
          />
        </Fields>

        <Button title='Enviar' />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={() => setCategoryModalOpen(false)}
        />
      </Modal>

    </Container>
  )
}

export { Register }
