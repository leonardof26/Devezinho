import React, { useState } from 'react'

import { Container, StudentList, Header } from './styles'

import logo from '../../assets/logo.png'

export default function StudentsList() {
  const [students, setStudents] = useState([])

  function generateRandomString() {
    return (
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15)
    )
  }

  return (
    <Container>
      <Header>
        <img src={logo} alt="Devezinho" />
      </Header>

      <StudentList>
        <li>
          <img
            src={`https://api.adorable.io/avatars/285/${generateRandomString()}.png`}
            alt="profile pic"
          />
          <strong>Fulano Beltrano</strong>
          <div>
            <strong>Score:</strong>
            <span>1090</span>
          </div>
          <div>
            <strong>Email:</strong>
            <span>fulano@gmail.com</span>
          </div>
        </li>
        <li>
          <img
            src={`https://api.adorable.io/avatars/285/${generateRandomString()}.png`}
            alt="profile pic"
          />
          <strong>Fulano Beltrano</strong>
          <div>
            <strong>Score:</strong>
            <span>1090</span>
          </div>
          <div>
            <strong>Email:</strong>
            <span>fulano@gmail.com</span>
          </div>
        </li>
        <li>
          <img
            src={`https://api.adorable.io/avatars/285/${generateRandomString()}.png`}
            alt="profile pic"
          />
          <strong>Fulano Beltrano</strong>
          <div>
            <strong>Score:</strong>
            <span>1090</span>
          </div>
          <div>
            <strong>Email:</strong>
            <span>fulano@gmail.com</span>
          </div>
        </li>
        <li>
          <img
            src={`https://api.adorable.io/avatars/285/${generateRandomString()}.png`}
            alt="profile pic"
          />
          <strong>Fulano Beltrano</strong>
          <div>
            <strong>Score:</strong>
            <span>1090</span>
          </div>
          <div>
            <strong>Email:</strong>
            <span>fulano@gmail.com</span>
          </div>
        </li>
        <li>
          <img
            src={`https://api.adorable.io/avatars/285/${generateRandomString()}.png`}
            alt="profile pic"
          />
          <strong>Fulano Beltrano</strong>
          <div>
            <strong>Score:</strong>
            <span>1090</span>
          </div>
          <div>
            <strong>Email:</strong>
            <span>fulano@gmail.com</span>
          </div>
        </li>
        <li>
          <img
            src={`https://api.adorable.io/avatars/285/${generateRandomString()}.png`}
            alt="profile pic"
          />
          <strong>Fulano Beltrano</strong>
          <div>
            <strong>Score:</strong>
            <span>1090</span>
          </div>
          <div>
            <strong>Email:</strong>
            <span>fulano@gmail.com</span>
          </div>
        </li>
        <li>
          <img
            src={`https://api.adorable.io/avatars/285/${generateRandomString()}.png`}
            alt="profile pic"
          />
          <strong>Fulano Beltrano</strong>
          <div>
            <strong>Score:</strong>
            <span>1090</span>
          </div>
          <div>
            <strong>Email:</strong>
            <span>fulano@gmail.com</span>
          </div>
        </li>
        <li>
          <img
            src={`https://api.adorable.io/avatars/285/${generateRandomString()}.png`}
            alt="profile pic"
          />
          <strong>Fulano Beltrano</strong>
          <div>
            <strong>Score:</strong>
            <span>1090</span>
          </div>
          <div>
            <strong>Email:</strong>
            <span>fulano@gmail.com</span>
          </div>
        </li>
        <li>
          <img
            src={`https://api.adorable.io/avatars/285/${generateRandomString()}.png`}
            alt="profile pic"
          />
          <strong>Fulano Beltrano</strong>
          <div>
            <strong>Score:</strong>
            <span>1090</span>
          </div>
          <div>
            <strong>Email:</strong>
            <span>fulano@gmail.com</span>
          </div>
        </li>
        <li>
          <img
            src={`https://api.adorable.io/avatars/285/${generateRandomString()}.png`}
            alt="profile pic"
          />
          <strong>Fulano Beltrano</strong>
          <div>
            <strong>Score:</strong>
            <span>1090</span>
          </div>
          <div>
            <strong>Email:</strong>
            <span>fulano@gmail.com</span>
          </div>
        </li>
      </StudentList>
    </Container>
  )
}
