import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';

export default class ProfessionalYear extends Component {
  static navigationOptions = {
    title: 'Professional Year'
  };

  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Text style={{ fontWeight: 'bold' }}>Professional Year</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  The Professional Year Program (PYear) is a job-readiness program that bridges the
                  gap between full-time study and professional employment in Australia.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
