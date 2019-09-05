import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Text, Icon } from 'native-base';

export default class Gallery extends Component {
  static navigationOptions = {
    drawerLabel: 'Gallery',
    drawerIcon: () => <Icon name="albums" />
  };

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Icon
                  name="menu"
                  size={30}
                  style={{ marginStart: 10 }}
                  backgroundColor="#000000"
                  onPress={() => this.props.navigation.openDrawer()}>
                  {' '}
                  Gallery
                </Icon>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
