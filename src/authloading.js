import React from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native';
import { FirebaseContext } from './firebase/firebase';

AsyncStorage.clear();

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this.bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  bootstrapAsync = async () => {
    // TODO remove
    await timeout(500);

    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <FirebaseContext.Consumer>
        {firebase => {
          console.log('firebase', firebase);
          firebase.doCreateUserWithEmailAndPassword('abh@gmail.com', 'test123');
          firebase.auth.onAuthStateChanged(user => {
            console.log('user', user);
          });
          return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <ActivityIndicator size="large" />
              <StatusBar barStyle="default" />
            </View>
          );
        }}
      </FirebaseContext.Consumer>
    );
  }
}
