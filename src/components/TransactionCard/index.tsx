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

interface IData {
  title: string
  amount: string
  category: ICategory
  date: string
}

interface IProps {
  data: IData
}

const TransactionCard = ({ data }: IProps): JSX.Element => {
  return (
    <>
      <Container>
        <Title>{data.title}</Title>
        <Amount>{data.amount}</Amount>

        <Footer>
          <Category>
            <Icon name='dollar-sign' />
            <CategoryName>{data.category.name}</CategoryName>
          </Category>
          <Date>{data.date}</Date>
        </Footer>
      </Container>
    </>
  )
}

export { TransactionCard }
