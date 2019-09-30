import React from 'react';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Navigation from './src/navigation';
import Firebase, { FirebaseContext } from './src/firebase/firebase';

class App extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font
    });
  }

  render() {
    return (
      <FirebaseContext.Provider value={new Firebase()}>
        <Navigation />
      </FirebaseContext.Provider>
    );
  }
}

export default App;
