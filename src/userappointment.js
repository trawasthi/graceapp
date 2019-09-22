import React, { Component } from 'react';
import { Container, Content, Text, Header, Card, CardItem, Body, Button } from 'native-base';
import { Alert, ActivityIndicator } from 'react-native';
import { withFirebase } from './firebase/firebase';

// Main class for viewing user's appointment
class UserAppointmentClass extends Component {
  constructor() {
    super();
    this.state = { isLoading: false };
  }

  render() {
    const { navigation } = this.props;
    const user = navigation.getParam('user', 'NO-ID');
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
              <Text>Query :</Text>
              <Text>{user.BookingQuery}</Text>
            </CardItem>
            <CardItem bordered>
              <Text>Time :</Text>
              <Text>{user.BookingTime}</Text>
            </CardItem>
          </Card>
          {!user.confirm && (
            <Button
              style={{
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#2196f3'
              }}
              onPress={() => {
                this.setState({ isLoading: true });
                fetch(
                  `https://us-central1-grace-5010b.cloudfunctions.net/sendConfirmationEmail?email=${user.Email}&name=${user.Name}&time=${user.BookingTime}`
                )
                  .then(response => response.json())
                  .then(responseJson => {
                    this.props.firebase.db
                      .ref(`Booked_Appointments/${user.Phone}/confirm`)
                      .set(true, error => {
                        this.setState({ isLoading: false });

                        // error handling
                        if (error) {
                          Alert.alert(
                            'Failed',
                            'Failed to confirm appointment. Please try again later.',
                            [
                              {
                                text: 'Ok',
                                onPress: () => {
                                  this.props.navigation.navigate('Home');
                                }
                              }
                            ]
                          );
                        } else {
                          // display success message
                          Alert.alert('Done', 'You have confirmed booking.', [
                            {
                              text: 'Ok',
                              onPress: () => {
                                this.props.navigation.navigate('Home');
                              }
                            }
                          ]);
                        }
                      });
                  })
                  .catch(error => {
                    console.error(error);
                  });
              }}>
              <Text> Confirm </Text>
            </Button>
          )}
          {this.state.isLoading && <ActivityIndicator size="large" />}
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
