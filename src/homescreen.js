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
  Icon,
  Right
} from 'native-base';
import { StyleSheet } from 'react-native';
import educationLogo from '../assets/education.png';
import migrationLogo from '../assets/migration.jpg';
import studyLogo from '../assets/study.png';
import professionalLogo from '../assets/professional.png';
import visaLogo from '../assets/visa.png';
import otherLogo from '../assets/other.png';
import { withFirebase } from './firebase/firebase';

class HomeScreen extends React.Component {
  render() {
    return (
      <Container style={[style.parent]}>
        <Card transparent style={[style.child]}>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate('Education')}
            style={{ alignItems: 'center', flex: 1 }}>
            <Thumbnail square source={educationLogo} style={{ width: 135, height: 125 }} />
          </CardItem>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate('Education')}
            footer
            style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Text>Education</Text>
          </CardItem>
        </Card>

        <Card transparent style={[style.child]}>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate('Migration')}
            style={{ alignItems: 'center', flex: 1 }}>
            <Thumbnail square source={migrationLogo} style={{ width: 135, height: 125 }} />
          </CardItem>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate('Migration')}
            footer
            style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Text>Migration</Text>
          </CardItem>
        </Card>

        <Card transparent style={[style.child]}>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate('Migration')}
            style={{ alignItems: 'center', flex: 1 }}>
            <Thumbnail square source={studyLogo} style={{ width: 135, height: 125 }} />
          </CardItem>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate('Migration')}
            footer
            style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Text>PTE/IELTS</Text>
          </CardItem>
        </Card>

        <Card transparent style={[style.child]}>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate('Migration')}
            style={{ alignItems: 'center', flex: 1 }}>
            <Thumbnail square source={professionalLogo} style={{ width: 135, height: 125 }} />
          </CardItem>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate('Migration')}
            footer
            style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Text>Professional Year</Text>
          </CardItem>
        </Card>

        <Card transparent style={[style.child]}>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate('Migration')}
            style={{ alignItems: 'center', flex: 1 }}>
            <Thumbnail square source={visaLogo} style={{ width: 135, height: 125 }} />
          </CardItem>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate('Migration')}
            footer
            style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Text>Visa Options</Text>
          </CardItem>
        </Card>

        <Card transparent style={[style.child]}>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate('Migration')}
            style={{ alignItems: 'center', flex: 1 }}>
            <Thumbnail square source={otherLogo} style={{ width: 135, height: 125 }} />
          </CardItem>
          <CardItem
            button
            onPress={() => this.props.navigation.navigate('Migration')}
            footer
            style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Text>Other Services</Text>
          </CardItem>
        </Card>
        <Button
          style={{
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#2196f3',
            marginLeft: 75
          }}
          primary
          rounded
          onPress={() => {
            this.props.navigation.navigate('Booking');
          }}>
          <Text style={{ fontWeight: 'bold' }}> Book Appointment </Text>
        </Button>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  parent: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 20
  },
  child: {
    width: '44%',
    margin: '1%',
    aspectRatio: 1
  }
});

const Home = withFirebase(HomeScreen);
Home.navigationOptions = ({ navigation }) => {
  return {
    title: 'Grace Consultancy',
    headerStyle: {
      backgroundColor: '#2196f3'
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
