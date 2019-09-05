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
import professionalLogo from '../assets/professional.png';
import visaLogo from '../assets/visa.png';
import serviceLogo from '../assets/service.png';

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
            <CardItem button onPress={() => this.props.navigation.navigate('Migration')}>
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
                <Thumbnail square source={professionalLogo} />
                <Body>
                  <Text>Professional Year</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail square source={visaLogo} />
                <Body>
                  <Text>Visa Options</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail square source={serviceLogo} />
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
            primary
            rounded
            onPress={() =>
              // eslint-disable-next-line no-alert
              alert(
                'Under Construction. Chill man. Work is going on.',
                [
                  { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                  },
                  { text: 'Ok.', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: false }
              )
            }>
            <Text style={{ fontWeight: 'bold' }}> Book Appointment </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
