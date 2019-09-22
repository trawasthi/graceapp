import React, { Component } from 'react';
import { Container, Content, Icon, Text, List, ListItem, Left, Right } from 'native-base';
import { ActivityIndicator } from 'react-native';
import { withFirebase } from './firebase/firebase';

// Main class for booking
class ViewAppointmentClass extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      isLoading: true
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
        this.setState({ list: dataArray, isLoading: false });
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
                  {user.confirm ? <Icon name="md-checkmark" /> : <Icon name="arrow-forward" />}
                </Right>
              </ListItem>
            ))}
          </List>
          {this.state.isLoading && <ActivityIndicator size="large" />}
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
