import React, { Component } from 'react';
import { Container, Content, Text, Form, Label, Item, Input, Button } from 'native-base';
import { ActivityIndicator, Alert } from 'react-native';
import { withFirebase } from './firebase/firebase';

// Main class for adding booking date and time
class AddAppointmentClass extends Component {
  constructor() {
    super();
    this.state = { datetime: '' };
  }

  onFormSubmit = () => {
    if (this.state.datetime === '') {
      Alert.alert('Invalid Input', 'Please date and time', [
        {
          text: 'Ok',
          onPress: () => {
            return null;
          }
        }
      ]);
    }

    this.props.firebase.db
      .ref('/Available_Appointments')
      .once('value')
      .then(snapshot => {
        let data = snapshot.val();

        if (data === null) {
          data = [];
        }
        console.log('data val', data);
        data.push(this.state.datetime);
        this.props.firebase.db.ref('Available_Appointments/').set(data, error => {
          // error handling
          if (error) {
            Alert.alert('Faild', 'Failed to add appointment. Please try again later.', [
              {
                text: 'Ok',
                onPress: () => {
                  this.props.navigation.navigate('Home');
                }
              }
            ]);
          } else {
            // display success message
            Alert.alert('Done', 'You have added new appointment.', [
              {
                text: 'Ok',
                onPress: () => {
                  this.props.navigation.navigate('Home');
                }
              }
            ]);
          }
        });
      });
  };

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Label>Date Time</Label>
              <Input
                onChangeText={datetime => this.setState({ datetime })}
                value={this.state.datetime}
              />
            </Item>
          </Form>
          <Button
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 16,
              backgroundColor: '#2196f3'
            }}
            primary
            rounded
            onPress={this.onFormSubmit}>
            <Text style={{ fontWeight: 'bold' }}> Add </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

// connect booking class to firebase functions
const AddAppointment = withFirebase(AddAppointmentClass);
AddAppointment.navigationOptions = {
  title: 'Appointments'
};

export default AddAppointment;
