import React, { useRef, useState } from 'react'

import logo from '../../../assets/logo.png'

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  Image,
  ButtonText,
} from './styles'

export default function SignUp({ navigation }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const emailRef = useRef()

  function handleSubmit() {
    navigation.navigate('Exercise')
  }

  return (
    <Container>
      <Image source={logo} />

      <Form>
        <FormInput
          icon="person-outline"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome Completo"
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current.focus()}
          value={name}
          onChangeText={setName}
        />
        <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite o seu e-mail"
          ref={emailRef}
          returnKeyType="next"
          onSubmitEditing={handleSubmit}
          value={email}
          onChangeText={setEmail}
        />

        <SubmitButton onPress={handleSubmit} loading={loading}>
          <ButtonText>Criar Conta</ButtonText>
        </SubmitButton>
      </Form>
    </Container>
  )
}
