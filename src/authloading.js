import React from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import { withFirebase } from './firebase/firebase';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'App' : 'Auth');
    });
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default withFirebase(AuthLoadingScreen);
