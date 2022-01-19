import React, { useState } from 'react'
import {
  Keyboard,
  Modal,
  TouchableWithoutFeedback,
  Alert
} from 'react-native'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

import { CategorySelectButton } from '../../components/CategorySelectButton'
import { Button } from '../../components/Form/Button'
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
import { InputForm } from '../../components/Form/InputForm'

interface IFormData {
  name: string
  amount: string
}

const schema = Yup.object().shape({
  name: Yup
    .string()
    .required('Nome é obrigatório'),
  amount: Yup
    .number()
    .typeError('Preço é obrigatório')
    .positive('O valor deve ser positivo')
})

const Register = (): JSX.Element => {
  const [transactionType, setTransactionType] = useState('')
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  })

  const handleDismissKeyboard = (): void => {
    Keyboard.dismiss()
  }

  const handleTransactionTypeSelect = (type: 'up' | 'down'): void => {
    setTransactionType(type)
  }

  const handleRegister = (form: IFormData): void => {
    if (transactionType === '') {
      return Alert.alert('selecione o tipo da transação')
    }

    if (category.key === 'category') {
      return Alert.alert('selecione a categoria')
    }

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }
    console.log(data)
  }

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  return (
    <TouchableWithoutFeedback
      onPress={handleDismissKeyboard}
    >
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        <Form>
          <Fields>
            <InputForm
              name='name'
              control={control}
              placeholder='Nome'
              autoCapitalize='sentences'
              autoCorrect={false}
              error={errors.name?.message}
            />
            <InputForm
              name='amount'
              control={control}
              placeholder='Preço'
              keyboardType='numeric'
              error={errors.amount?.message}
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
              title={category.name}
              onPress={() => setCategoryModalOpen(true)}
            />
          </Fields>
          <Button
            title='Enviar'
            onPress={handleSubmit(handleRegister)}
          />
        </Form>
        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={() => setCategoryModalOpen(false)}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  )
}

export { Register }
