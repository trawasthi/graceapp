import React, { Component } from 'react';
import { Container, Content, Text, Form, Label, Item, Input, Button, View } from 'native-base';
import { ActivityIndicator, Alert } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { withFirebase } from './firebase/firebase';

// Main class for adding booking date and time
class AddAppointmentClass extends Component {
  constructor() {
    super();
    this.state = { datetime: '', isDateTimePickerVisible: false };
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    const data = date.toLocaleDateString();
    this.setState({ datetime: data });
    this.hideDateTimePicker();
  };

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
      return;
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
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Text>{this.state.datetime}</Text>
        <Button title="Show DatePicker" onPress={this.showDateTimePicker}>
          <Text>Choose Date</Text>
        </Button>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
          mode="datetime"
        />
      </View>
      // <Container>
      //   <Content>
      //     <DatePickerIOS
      //       date={new Date()}
      //       // onDateChange={this.setDate}
      //     />

      //     <Form>
      //       <Item>
      //         <Label>Date Time</Label>
      //         <Input
      //           onChangeText={datetime => this.setState({ datetime })}
      //           value={this.state.datetime}
      //         />
      //       </Item>
      //     </Form>
      //     <Button
      //       style={{
      //         textAlign: 'center',
      //         justifyContent: 'center',
      //         alignItems: 'center',
      //         marginTop: 16,
      //         backgroundColor: '#2196f3'
      //       }}
      //       primary
      //       rounded
      //       onPress={this.onFormSubmit}>
      //       <Text style={{ fontWeight: 'bold' }}> Add </Text>
      //     </Button>
      //   </Content>
      // </Container>
    );
  }
}

// connect booking class to firebase functions
const AddAppointment = withFirebase(AddAppointmentClass);
AddAppointment.navigationOptions = {
  title: 'Appointments'
};

export default AddAppointment;
