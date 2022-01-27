import { yupResolver } from '@hookform/resolvers/yup'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Keyboard, Modal, Alert, StyleSheet } from 'react-native'
import {
  gestureHandlerRootHOC,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler'
import * as Yup from 'yup'

import { Button } from '../../components/Form/Button'
import { CategorySelectButton } from '../../components/Form/CategorySelectButton'
import { InputForm } from '../../components/Form/InputForm'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'
import { CategorySelect } from '../CategorySelect'
import {
  Container,
  Form,
  Header,
  Title,
  Fields,
  TransactionTypes,
} from './styles'

interface IFormData {
  name: string
  amount: string
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  amount: Yup.number()
    .typeError('Preço é obrigatório')
    .positive('O valor deve ser positivo'),
})

const dataKey = '@gofinances:transactions'

const Register = () => {
  const [transactionType, setTransactionType] = useState('')
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  })

  const ButtonWithHoc = gestureHandlerRootHOC(() => (
    <CategorySelect
      category={category}
      setCategory={setCategory}
      closeSelectCategory={handleCloseCategoryModal}
    />
  ))

  const handleDismissKeyboard = (): void => {
    Keyboard.dismiss()
  }

  const handleTransactionTypeSelect = (type: 'up' | 'down'): void => {
    setTransactionType(type)
  }

  const handleOpenCategoryModal = (): void => {
    setCategoryModalOpen(true)
  }

  const handleCloseCategoryModal = (): void => {
    setCategoryModalOpen(false)
  }

  const handleRegister = async (form: IFormData) => {
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
      category: category.key,
    }

    try {
      await AsyncStorage.setItem(dataKey, JSON.stringify(data))
    } catch (error) {
      console.log(error)
      Alert.alert('Erro ao registrar transação')
    }
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    const loadData = async () => {
      const data = await AsyncStorage.getItem(dataKey)

      if (data != null) {
        console.log(JSON.parse(data))
      }
    }

    loadData()
  }, [])

  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={handleDismissKeyboard}
    >
      <>
        <Container>
          <Header>
            <Title>Cadastro</Title>
          </Header>
          <Form>
            <Fields>
              <InputForm
                name="name"
                control={control}
                placeholder="Nome"
                autoCapitalize="sentences"
                autoCorrect={false}
                error={errors.name?.message}
              />
              <InputForm
                name="amount"
                control={control}
                placeholder="Preço"
                keyboardType="numeric"
                error={errors.amount?.message}
              />
              <TransactionTypes>
                <TransactionTypeButton
                  type="up"
                  title="Entrada"
                  onPress={() => handleTransactionTypeSelect('up')}
                  isActive={transactionType === 'up'}
                />
                <TransactionTypeButton
                  type="down"
                  title="Saída"
                  onPress={() => handleTransactionTypeSelect('down')}
                  isActive={transactionType === 'down'}
                />
              </TransactionTypes>
              <CategorySelectButton
                title={category.name}
                onPress={handleOpenCategoryModal}
              />
            </Fields>
            <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
          </Form>
          <Modal visible={categoryModalOpen}>
            <ButtonWithHoc />
          </Modal>
        </Container>
      </>
    </TouchableWithoutFeedback>
  )
}

export { Register }

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
})
