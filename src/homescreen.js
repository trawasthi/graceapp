import React from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Body,
  Text,
  Card,
  CardItem,
  Thumbnail
} from 'native-base';

import educationLogo from '../assets/education.png';
import migrationLogo from '../assets/migration.png';
import studyLogo from '../assets/study.png';

export default class Home extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Grace Consultancy</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate('Education')}>
              <Left>
                <Thumbnail square source={educationLogo} />
                <Body>
                  <Text>Education</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail square source={migrationLogo} />
                <Body>
                  <Text>Migration</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail square source={studyLogo} />
                <Body>
                  <Text>PTE/IELTS</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={educationLogo} />
                <Body>
                  <Text>Professional Year</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={educationLogo} />
                <Body>
                  <Text>Visa Options</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={educationLogo} />
                <Body>
                  <Text>Other Services</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>

          <Button
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 8
            }}
            primary>
            <Text style={{ fontWeight: 'bold' }}> Book Appointment </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
