import { Platform } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`

export const Image = styled.Image`
  height: 190px;
  width: 190px;
`

export const Form = styled.View`
  align-self: stretch;
`

export const FormInput = styled.TextInput.attrs({
  placeholderTextColor: '#fff',
})`
  padding: 0 15px;
  height: 46px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`

export const SubmitButton = styled.TouchableOpacity`
  height: 46px;
  background: #222239;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`
