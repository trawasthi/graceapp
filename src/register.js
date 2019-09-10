import React from 'react';
import { AsyncStorage, StyleSheet } from 'react-native';
import { Input, Item, Container, Button, Text, Thumbnail } from 'native-base';
import logo from '../assets/logo.png';

export default class RegisterScreen extends React.Component {
  state = { email: '', password: '', errorMessage: null };

  render() {
    return (
      <Container style={styles.container}>
        <Text style={{ fontWeight: 'bold', color: '#2196f3', marginTop: 16 }}>Register</Text>
        {this.state.errorMessage && <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>}
        <Item style={{ width: 300 }}>
          <Input
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </Item>

        <Item style={{ width: 300 }}>
          <Input
            secureTextEntry
            placeholder="Password"
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </Item>

        <Item style={{ width: 300 }}>
          <Input
            secureTextEntry
            placeholder="Confirm Password"
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </Item>

        <Button
          onPress={this._signInAsync}
          primary
          style={{
            justifyContent: 'center',
            marginTop: 8,
            backgroundColor: '#2196f3',
            width: 150
          }}>
          <Text style={{ fontWeight: 'bold' }}> Sign Up </Text>
        </Button>
      </Container>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center'
  }
});
