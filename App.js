import { createAppContainer, SafeAreaView, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';

import { Icon, View, Text, Image, Content } from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Home from './src/homescreen';
import Education from './src/education';
import Migration from './src/migration';
import Gallery from './src/gallery';
import Links from './src/links';
import Logo from './assets/logo.png';
import AuthLoadingScreen from './src/authloading';
import SignInScreen from './src/signin';
import RegisterScreen from './src/register';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Education: {
      screen: Education
    },
    Migration: {
      screen: Migration
    }
  },
  {
    navigationOptions: {
      drawerIcon: () => <Icon name="home" />
    }
  }
);

const drawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: RootStack
    },
    Gallery: {
      screen: Gallery
    },
    Links: {
      screen: Links
    }
  },
  {
    contentComponent: props => (
      <SafeAreaView
        style={{
          backgroundColor: 'Red'
        }}>
        <View
          style={{
            height: 100,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          {/* <Content>
            <Image source={Logo} style={{ height: 200, width: null, flex: 1 }} />
          </Content> */}
          <Text style={{ fontSize: 32 }}>LOGO</Text>
        </View>
        <DrawerNavigatorItems {...props} />
      </SafeAreaView>
    )
  }
);

const AuthStack = createStackNavigator(
  {
    SignIn: {
      screen: SignInScreen
    },
    Register: {
      screen: RegisterScreen
    }
  },
  {
    mode: 'modal'
  }
);

const App = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: drawerNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);

export default App;
