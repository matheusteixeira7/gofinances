import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const RectButtonContainer = styled(RectButton)`
  background-color: #ff9000;
  width: 400px;
  padding: 18px;

  align-items: center;

  border-radius: 10px;
`
