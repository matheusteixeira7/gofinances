import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons'

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.primary};

  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;

const UserWrapper = styled.View`
  width: 100%;

  padding: 0 24px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 48px;
`;

const User = styled.View`
  margin-left: 17px;
`;

const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`;

const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 }
})`
  flex: 1;
  position: absolute;
  margin-top: ${RFPercentage(24)}px;
`;


export {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards
};
