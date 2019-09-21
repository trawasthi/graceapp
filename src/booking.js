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
      bookTime: '',
      availableTime: []
    };
  }

  componentDidMount() {
    this.props.firebase.db
      .ref('/Available_Appointments')
      .once('value')
      .then(snapshot => {
        const data = snapshot.val();
        const dataArray = Object.values(data);
        this.setState({ availableTime: dataArray });
      });
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
      Alert.alert('Invalid Input', 'Please enter your name', [
        {
          text: 'Ok',
          onPress: () => {
            return null;
          }
        }
      ]);
      return;
    }

    if (this.state.phoneNumber === '') {
      Alert.alert('Invalid Input', 'Please enter a valid phone number', [
        {
          text: 'Ok',
          onPress: () => {
            return null;
          }
        }
      ]);
      return;
    }

    if (this.state.email === '') {
      Alert.alert('Invalid Input', 'Please enter a valid email', [
        {
          text: 'Ok',
          onPress: () => {
            return null;
          }
        }
      ]);
      return;
    }

    if (this.state.address === '') {
      Alert.alert('Invalid Input', 'Please enter address', [
        {
          text: 'Ok',
          onPress: () => {
            return null;
          }
        }
      ]);
      return;
    }

    if (this.state.bookOpt === '') {
      Alert.alert('Invalid Input', 'Please enter your booking query category', [
        {
          text: 'Ok',
          onPress: () => {
            return null;
          }
        }
      ]);
      return;
    }

    if (this.state.bookTime === '') {
      Alert.alert('Invalid Input', 'Please enter appointment date and time', [
        {
          text: 'Ok',
          onPress: () => {
            return null;
          }
        }
      ]);
    }

    // db operation
    this.props.firebase.db.ref(`Booked_Appointments/${this.state.phoneNumber}`).set(
      {
        Name: this.state.fullName,
        Phone: this.state.phoneNumber,
        Email: this.state.email,
        Address: this.state.address,
        BookingQuery: this.state.bookOpt,
        BookingTime: this.state.bookTime
      },
      error => {
        if (error) {
          Alert.alert('Faild', 'Failed to book appointment. Please try again later.', [
            {
              text: 'Ok',
              onPress: () => {
                this.props.navigation.navigate('Home');
              }
            }
          ]);
        } else {
          // remove selected appointment
          this.props.firebase.db
            .ref('/Available_Appointments')
            .once('value')
            .then(snapshot => {
              const data = snapshot.val();
              for (const val in data) {
                if (data[val] === this.state.bookTime) {
                  this.props.firebase.db.ref(`Available_Appointments/${val}`).remove();
                  break;
                }
              }
            });

          Alert.alert('Done', 'You have booked an appointment.', [
            {
              text: 'Ok',
              onPress: () => {
                this.props.navigation.navigate('Home');
              }
            }
          ]);
        }
      }
    );
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
                <Picker.Item label="PTE/IELTS" value="PTE/IELTS" />
                <Picker.Item label="Professional year" value="Professional year" />
              </Picker>
            </Item>
            <Item style={{ marginTop: 16, borderColor: 'transparent' }}>
              <Label>Select apointment date and time</Label>
            </Item>
            <Item>
              <Picker
                mode="dropdown"
                iosHeader="Date/Time"
                iosIcon={<Icon name="arrow-down" />}
                selectedValue={this.state.bookTime}
                onValueChange={this.onDateTimeChange}>
                {this.state.availableTime.map((value, i) => (
                  <Picker.Item key={i} label={value} value={value} />
                ))}
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
