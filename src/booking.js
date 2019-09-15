import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Label, Input } from 'native-base';

export default class Booking extends Component {
  static navigationOptions = {
    title: 'Booking'
  };

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
