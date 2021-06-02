import React from 'react';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreting,
  UserName,
  Icon
} from './styles'

export function Dashboard() {
  return (
    <Container>
    <Header>
      <UserWrapper>
        <UserInfo>
          <Photo
            source={{ uri: 'https://avatars.githubusercontent.com/u/17159083?v=4'}}
          />
          <User>
            <UserGreting>Olá, </UserGreting>
            <UserName>Cassio</UserName>
          </User>
        </UserInfo>

        <Icon name="power"/>
      </UserWrapper>

    </Header>
    </Container>
    )
  }

