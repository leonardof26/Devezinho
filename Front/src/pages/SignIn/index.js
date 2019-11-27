import React, { useState } from 'react'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import logo from '../../assets/logo.png'

import { Container, Menu } from './styles'

import history from '../../services/history'

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail vá lido')
    .required('O email é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
})

export default function SignIn() {
  const [loading, setLoading] = useState(false)

  function handleSubmit({ email, password }) {
    history.push('/students')
  }

  return (
    <Container>
      <Menu>
        <img src={logo} alt="GoBarber" />

        <Form schema={schema} onSubmit={handleSubmit}>
          <strong>SEU E-MAIL</strong>
          <Input name="email" type="email" placeholder="exemplo@email.com" />
          <strong>SUA SENHA</strong>
          <Input name="password" type="password" placeholder="********" />

          <button type="submit">
            {loading ? 'Carregando...' : 'Entrar no sistema'}
          </button>
        </Form>
      </Menu>
    </Container>
  )
}
