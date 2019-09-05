import React from 'react';
import {
  Container,
  Content,
  Button,
  Left,
  Body,
  Text,
  Card,
  CardItem,
  Thumbnail,
  Icon
} from 'native-base';
import educationLogo from '../assets/education.png';
import migrationLogo from '../assets/migration.png';
import studyLogo from '../assets/study.png';
import professionalLogo from '../assets/professional.png';
import visaLogo from '../assets/visa.png';

export default class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Grace Consultancy',
      headerStyle: {
        backgroundColor: '#f44336'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerLeft: (
        <Icon
          name="menu"
          size={30}
          style={{ marginStart: 10 }}
          backgroundColor="#000000"
          onPress={() => navigation.openDrawer()}
        />
      )
    };
  };

  render() {
    return (
      <Container>
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

          {/* <Card>
            <CardItem>
              <Left>
                <Thumbnail square source={serviceLogo} />
                <Body>
                  <Text>Other Services</Text>
                </Body>
              </Left>
            </CardItem>
          </Card> */}

          <Button
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 8,
              backgroundColor: '#2196f3'
            }}
            primary
            rounded
            onPress={() =>
              // eslint-disable-next-line no-alert
              alert(
                'Under Construction. Work in progress...',
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
