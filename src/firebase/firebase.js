import React from 'react';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDpDk3ks3RBQBQrA629f810J1vC0AayO4M',
  authDomain: 'grace-5010b.firebaseapp.com',
  databaseURL: 'https://grace-5010b.firebaseio.com',
  projectId: 'grace-5010b',
  storageBucket: '',
  messagingSenderId: '173186058856',
  appId: '1:173186058856:web:f661dcccc0f13b1186c9dd'
};

export default class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.database();
  }
}

const FirebaseContext = React.createContext(null);
export { FirebaseContext };

export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);
