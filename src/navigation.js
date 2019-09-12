import { createAppContainer, SafeAreaView, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import { Icon, View, Text } from 'native-base';
import React from 'react';
import Home from './homescreen';
import Education from './education';
import Migration from './migration';
import Gallery from './gallery';
import Links from './links';
import AuthLoadingScreen from './authloading';
import SignInScreen from './signin';
import RegisterScreen from './register';

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

export default createAppContainer(
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
