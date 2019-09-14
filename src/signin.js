import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Item, Container, Button, Text, Thumbnail } from 'native-base';
import logo from '../assets/logo.png';
import { withFirebase } from './firebase/firebase';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = { email: '', password: '', errorMessage: null };
  }

  render() {
    return (
      <Container style={styles.container}>
        <Thumbnail square source={logo} style={{ width: 194, height: 71 }} />
        <Text style={{ fontWeight: 'bold', color: '#2196f3', marginTop: 16 }}>Member login</Text>
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
        <Button
          title="Login"
          onPress={this.loginIn}
          primary
          style={{
            justifyContent: 'center',
            marginTop: 8,
            backgroundColor: '#2196f3',
            width: 150
          }}>
          <Text style={{ fontWeight: 'bold' }}> Login </Text>
        </Button>
        <Button transparent onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={{ color: '#2196f3' }}> Create an account </Text>
        </Button>
      </Container>
    );
  }

  loginIn = () => {
    this.props.firebase.auth
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.navigation.navigate('App');
      })
      .catch(error => {
        this.setState({ errorMessage: error.code });
      });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const SignInScreen = withFirebase(SignIn);
SignInScreen.navigationOptions = { header: null };
export default SignInScreen;
