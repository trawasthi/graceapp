import React, { Component } from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Label,
  Input,
  Button,
  Picker,
  Icon,
  Text
} from 'native-base';
import { Alert } from 'react-native';
import { withFirebase } from './firebase/firebase';

class BookingClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      phoneNumber: '',
      email: '',
      address: '',
      bookOpt: '',
      bookTime: ''
    };
  }

  onQueriesChange = value => {
    this.setState({
      bookOpt: value
    });
  };

  onDateTimeChange = value => {
    this.setState({
      bookTime: value
    });
  };

  onFormSubmit = () => {
    if (this.state.fullName === '') {
      Alert.alert(
        'Invalid Input',
        'Please enter your name',
        [
          {
            text: 'Ok',
            onPress: () => {
              return null;
            }
          }
        ],
        { cancelable: false }
      );
      return;
    }

    if (this.state.phoneNumber === '') {
      Alert.alert(
        'Invalid Input',
        'Please enter a valid phone number',
        [
          {
            text: 'Ok',
            onPress: () => {
              return null;
            }
          }
        ],
        { cancelable: false }
      );
      return;
    }

    if (this.state.email === '') {
      Alert.alert(
        'Invalid Input',
        'Please enter a valid email',
        [
          {
            text: 'Ok',
            onPress: () => {
              return null;
            }
          }
        ],
        { cancelable: false }
      );
      return;
    }

    if (this.state.address === '') {
      Alert.alert(
        'Invalid Input',
        'Please enter address',
        [
          {
            text: 'Ok',
            onPress: () => {
              return null;
            }
          }
        ],
        { cancelable: false }
      );
      return;
    }

    if (this.state.bookOpt === '') {
      Alert.alert(
        'Invalid Input',
        'Please enter your booking query category',
        [
          {
            text: 'Ok',
            onPress: () => {
              return null;
            }
          }
        ],
        { cancelable: false }
      );
      return;
    }

    if (this.state.bookTime === '') {
      Alert.alert(
        'Invalid Input',
        'Please enter appointment date and time',
        [
          {
            text: 'Ok',
            onPress: () => {
              return null;
            }
          }
        ],
        { cancelable: false }
      );
    }

    // db operation
  };

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Label>Full Name</Label>
              <Input
                onChangeText={fullName => this.setState({ fullName })}
                value={this.state.fullName}
              />
            </Item>
            <Item>
              <Label>Phone number</Label>
              <Input
                keyboardType="numeric"
                onChangeText={phoneNumber => this.setState({ phoneNumber })}
                value={this.state.phoneNumber}
              />
            </Item>
            <Item>
              <Label>Email</Label>
              <Input onChangeText={email => this.setState({ email })} value={this.state.email} />
            </Item>
            <Item>
              <Label>Address</Label>
              <Input
                onChangeText={address => this.setState({ address })}
                value={this.state.address}
              />
            </Item>
            <Item style={{ marginTop: 16, borderColor: 'transparent' }}>
              <Label>What do you want to book for?</Label>
            </Item>
            <Item>
              <Picker
                mode="dropdown"
                iosHeader="Queries"
                iosIcon={<Icon name="arrow-down" />}
                selectedValue={this.state.bookOpt}
                onValueChange={this.onQueriesChange}>
                <Picker.Item label="Migration" value="Migration" />
                <Picker.Item label="Study" value="Study" />
                <Picker.Item label="PTE/IELTS" value="Pte" />
                <Picker.Item label="Professional year" value="Py" />
              </Picker>
            </Item>
            <Item style={{ marginTop: 16, borderColor: 'transparent' }}>
              <Label>Select apointment date and time</Label>
            </Item>
            <Item>
              <Picker
                mode="dropdown"
                iosHeader="Queries"
                iosIcon={<Icon name="arrow-down" />}
                selectedValue={this.state.bookTime}
                onValueChange={this.onDateTimeChange}>
                <Picker.Item label="21/09/2019 09:00" value="21/09/2019 09:00" />
                <Picker.Item label="23/09/2019 10:00" value="23/09/2019 10:00" />
                <Picker.Item label="23/09/2019 12:30" value="23/09/2019 12:30" />
                <Picker.Item label="27/09/2019 15:00" value="27/09/2019 15:00" />
              </Picker>
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
            <Text style={{ fontWeight: 'bold' }}> Book Now </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const Booking = withFirebase(BookingClass);
Booking.navigationOptions = {
  title: 'Booking'
};

export default Booking;
