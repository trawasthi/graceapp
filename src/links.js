import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Icon } from 'native-base';

export default class Links extends Component {
  static navigationOptions = {
    drawerLabel: 'Links',
    drawerIcon: () => <Icon name="link" />
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
                  Links
                </Icon>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
