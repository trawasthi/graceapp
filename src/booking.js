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

export default class Booking extends Component {
  static navigationOptions = {
    title: 'Booking'
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: 'key1'
    };
  }

  onValueChange = value => {
    this.setState({
      selected: value
    });
  };

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Label>Full Name</Label>
              <Input />
            </Item>
            <Item>
              <Label>Phone number</Label>
              <Input keyboardType="numeric" />
            </Item>
            <Item>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item>
              <Label>Address</Label>
              <Input />
            </Item>
            <Item style={{ marginTop: 16, borderColor: 'transparent' }}>
              <Label>What do you want to book for?</Label>
            </Item>
            <Item>
              <Picker
                mode="dropdown"
                iosHeader="Queries"
                iosIcon={<Icon name="arrow-down" />}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange}>
                <Picker.Item label="Migration" value="key0" />
                <Picker.Item label="Study" value="key1" />
                <Picker.Item label="PTE/IELTS" value="key2" />
                <Picker.Item label="Professional year" value="key3" />
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
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange}>
                <Picker.Item label="21/09/2019 09:00" value="key0" />
                <Picker.Item label="23/09/2019 10:00" value="key1" />
                <Picker.Item label="23/09/2019 12:30" value="key2" />
                <Picker.Item label="27/09/2019 15:00" value="key3" />
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
            rounded>
            <Text style={{ fontWeight: 'bold' }}> Book Now </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
