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
import { withFirebase } from './firebase/firebase';

class HomeScreen extends React.Component {
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
            onPress={() => {
              this.props.navigation.navigate('Booking');
            }}>
            <Text style={{ fontWeight: 'bold' }}> Book Appointment </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const Home = withFirebase(HomeScreen);
Home.navigationOptions = ({ navigation }) => {
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

export default Home;
