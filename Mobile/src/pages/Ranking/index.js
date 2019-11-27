import React from 'react'
import { View, Text } from 'react-native'

import {
  Container,
  Header,
  Avatar,
  Name,
  UserRanking,
  Users,
  UsersInfo,
  UserAvatar,
  Info,
  Title,
  Score,
} from './styles'

const userList = [
  { id: '1', name: 'fulano', score: 10900 },
  { id: '2', name: 'fulano beltrano', score: 10800 },
  { id: '3', name: 'fulano beltrano', score: 10700 },
  { id: '4', name: 'fulano beltrano', score: 10600 },
  { id: '5', name: 'fulano beltrano', score: 10500 },
]

export default function Ranking() {
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
        <Avatar
          source={{
            uri: `https://api.adorable.io/avatars/285/${generateRandomString()}.png`,
          }}
        />
        <Name>Fulano Beltrano</Name>
        <UserRanking>#1080</UserRanking>
      </Header>

      <Users
        data={userList}
        keyExtractor={user => user.id}
        renderItem={({ item }) => (
          <UsersInfo>
            <UserAvatar
              source={{
                uri: `https://api.adorable.io/avatars/285/${generateRandomString()}.png`,
              }}
            />
            <Info>
              <Title>{item.name}</Title>
              <Score>{item.score}</Score>
            </Info>
          </UsersInfo>
        )}
      />
    </Container>
  )
}
