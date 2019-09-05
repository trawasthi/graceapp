import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';

export default class Migration extends Component {
  static navigationOptions = {
    title: 'Migration'
  };

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  If you are living overseas and wish to enhance your skills and explore yourself to
                  gain global experience then Australia is the country you. Australian government
                  provides you various visa types which allow you to migrate to Australia based on
                  your skills, experience and education etc. Following are the Visa Subclasses that
                  allows you to migrate to Australia and gives you options for Permanent Residency
                  as well.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
