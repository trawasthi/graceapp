import React from 'react';
import Navigation from './src/navigation';
import Firebase, { FirebaseContext } from './src/firebase/firebase';

class App extends React.Component {
  render() {
    return (
      <FirebaseContext.Provider value={new Firebase()}>
        <Navigation />
      </FirebaseContext.Provider>
    );
  }
}

export default App;
