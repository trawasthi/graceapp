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

// Main class for booking
class ViewAppointmentClass extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Label>Full Name</Label>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

// connect booking class to firebase functions
const ViewAppointment = withFirebase(ViewAppointmentClass);
ViewAppointment.navigationOptions = {
  title: 'Appointments'
};

export default ViewAppointment;
