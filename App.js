import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/homescreen';
import Education from './src/education';
import Migration from './src/migration';

const RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
  Education: {
    screen: Education
  },
  Migration: {
    screen: Migration
  }
});

const App = createAppContainer(RootStack);

export default App;
