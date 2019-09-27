import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Icon } from 'native-base';

export default class Points extends Component {
  static navigationOptions = {
    drawerLabel: 'PR points table',
    drawerIcon: () => <Icon name="ios-grid" />
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
                  PR point table
                </Icon>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
