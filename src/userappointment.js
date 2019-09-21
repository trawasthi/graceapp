import React, { Component } from 'react';
import { Container, Content, Text, Header, Card, CardItem, Body, Button } from 'native-base';
import { Alert } from 'react-native';
import { withFirebase } from './firebase/firebase';

// Main class for viewing user's appointment
class UserAppointmentClass extends Component {
  render() {
    const { navigation } = this.props;
    const user = navigation.getParam('user', 'NO-ID');
    console.log('user props', user);

    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>{user.Name}</Text>
            </CardItem>
            <CardItem bordered>
              <Text>Phone :</Text>
              <Text>{user.Phone}</Text>
            </CardItem>
            <CardItem bordered>
              <Text>Email :</Text>
              <Text>{user.Email}</Text>
            </CardItem>
            <CardItem bordered>
              <Text>Address :</Text>
              <Text>{user.Address}</Text>
            </CardItem>
            <CardItem bordered>
              <Text>Type :</Text>
              <Text>{user.BookingQuery}</Text>
            </CardItem>
            <CardItem bordered>
              <Text>Query :</Text>
              <Text>{user.BookingTime}</Text>
            </CardItem>
          </Card>
          <Button
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#2196f3'
            }}
            onPress={() => this.props.navigation.navigate('ViewAppointment')}>
            <Text> Confirm </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

// connect booking class to firebase functions
const UserAppointment = withFirebase(UserAppointmentClass);
UserAppointment.navigationOptions = {
  title: 'Client'
};

export default UserAppointment;
