import React from 'react'

import { HighlightCard } from '../../components/HighlightCard'
import {
  TransactionCard,
  ITransactionCardProps,
} from '../../components/TransactionCard'
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
  LogoutButton,
} from './styles'

interface IDataListProps extends ITransactionCardProps {
  id: string
}

const Dashboard = () => {
  const data: IDataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign',
      },
      date: '13/04/2020',
    },
    {
      id: '2',
      type: 'negative',
      title: 'Aluguel casa',
      amount: 'R$ 1.400,00',
      category: {
        name: 'Moradia',
        icon: 'home',
      },
      date: '13/04/2020',
    },
    {
      id: '3',
      type: 'negative',
      title: 'Hamburgueria',
      amount: 'R$ 86,00',
      category: {
        name: 'Alimentação',
        icon: 'coffee',
      },
      date: '13/04/2020',
    },
  ]

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/62615871?v=4',
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Matheus</UserName>
            </User>
          </UserInfo>
          <LogoutButton
            onPress={() => {
              console.log('change here')
            }}
          >
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 10.000,00"
          lastTransaction="Última saída dia 03 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 7.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  )
}

export { Dashboard, IDataListProps }
