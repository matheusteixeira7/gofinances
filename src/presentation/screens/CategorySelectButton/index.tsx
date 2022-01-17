import React from 'react'
import { FlatList } from 'react-native'
import { categories } from '../../../utils/categories'
import { Button } from '../../components/Form/Button'
import {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer
} from './styles'

interface ICategoryProps {
  key: string
  name: string
}

interface IProps {
  category: string
  setCategory: (category: ICategoryProps) => void
  closeSelectCategory: () => void
}

export const CategorySelectButton = ({
  category,
  setCategory,
  closeSelectCategory
}: IProps): JSX.Element => {
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        renderItem={({ item }) => (
          <Category>
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
        keyExtractor={item => item.key}
      />

      <Footer>
        <Button title='Selecionar' />
      </Footer>
    </Container>
  )
}
