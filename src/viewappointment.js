import React, { Component } from 'react';
import { Container, Content, Icon, Text, Header, List, ListItem, Left, Right } from 'native-base';
import { Alert } from 'react-native';
import { withFirebase } from './firebase/firebase';

// Main class for booking
class ViewAppointmentClass extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    // load all the booked appointments during mount
    this.props.firebase.db
      .ref('/Booked_Appointments')
      .once('value')
      .then(snapshot => {
        const data = snapshot.val();
        const dataArray = Object.values(data);
        this.setState({ list: dataArray });
      });
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            {this.state.list.map((user, i) => (
              <ListItem
                key={i}
                onPress={() => {
                  this.props.navigation.navigate('UserAppointment', { user });
                }}>
                <Left>
                  <Text>{user.Name}</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            ))}
          </List>
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
