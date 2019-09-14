import { createAppContainer, SafeAreaView, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';
import { Icon, View, Text } from 'native-base';
import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Home from './homescreen';
import Education from './education';
import Migration from './migration';
import Gallery from './gallery';
import Links from './links';
import AuthLoadingScreen from './authloading';
import SignInScreen from './signin';
import RegisterScreen from './register';
import { FirebaseContext } from './firebase/firebase';

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

        <FirebaseContext.Consumer>
          {firebase => {
            return (
              <TouchableOpacity
                onPress={() =>
                  Alert.alert(
                    'Log out',
                    'Do you want to logout?',
                    [
                      {
                        text: 'Cancel',
                        onPress: () => {
                          return null;
                        }
                      },
                      {
                        text: 'Confirm',
                        onPress: () => {
                          firebase.auth.signOut().then(() => {
                            props.navigation.navigate('Auth');
                          });
                        }
                      }
                    ],
                    { cancelable: false }
                  )
                }>
                <View style={styles.item}>
                  <View style={styles.iconContainer}>
                    <Icon name="ios-log-out" />
                  </View>
                  <Text style={styles.label}>Logout</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        </FirebaseContext.Consumer>
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

const switchNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: drawerNavigator,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    margin: 16,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, .87)',
    fontSize: 14
  },
  iconContainer: {
    marginHorizontal: 16,
    width: 24,
    alignItems: 'center'
  }
});

export default createAppContainer(switchNavigator);
