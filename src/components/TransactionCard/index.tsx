import React from 'react'

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date
} from './styles'

interface ICategory {
  name: string
  icon: string
}

interface ITransactionCardProps {
  type: 'positive' | 'negative'
  title: string
  amount: string
  category: ICategory
  date: string
}

interface IProps {
  data: ITransactionCardProps
}

const TransactionCard = ({ data }: IProps): JSX.Element => {
  return (
    <>
      <Container>
        <Title>{data.title}</Title>
        <Amount type={data.type}>
          {data.type === 'positive' ? '+ ' : '- '}
          {data.amount}
        </Amount>

        <Footer>
          <Category>
            <Icon name={data.category.icon} />
            <CategoryName>{data.category.name}</CategoryName>
          </Category>
          <Date>{data.date}</Date>
        </Footer>
      </Container>
    </>
  )
}

export { TransactionCard, ITransactionCardProps }
