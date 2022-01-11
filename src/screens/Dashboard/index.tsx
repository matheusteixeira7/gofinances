import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'

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
} from './styles'

const Dashboard = () => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/62615871?v=4' }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Matheus</UserName>
            </User>
          </UserInfo>
          <Icon name='power'/>
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type='up'
          title='Entradas'
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de abril'
        />
        <HighlightCard
          type='down'
          title='Saídas'
          amount='R$ 10.000,00'
          lastTransaction='Última saída dia 03 de abril'
        />
        <HighlightCard
          type='total'
          title='Total'
          amount='R$ 7.400,00'
          lastTransaction='Última entrada dia 13 de abril'
        />
      </HighlightCards>
    </Container>
  )
}

export { Dashboard }
