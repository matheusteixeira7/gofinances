import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.background};
`;

const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.title};
`;

export { Container, Title };
