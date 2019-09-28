import React, { Component } from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Icon,
  Button,
  Right,
  Left,
  View,
  Header
} from 'native-base';
import { Image, Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImageViewer from 'react-native-image-zoom-viewer';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';

const images = [
  {
    // Simplest usage.
    // url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460",
    // url:
    // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527660246058&di=6f0f1b19cf05a64317cbc5d2b3713d64&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0112a85874bd24a801219c7729e77d.jpg",
    // You can pass props to <Image />.
    props: {
      // headers: ...
      source: require('../assets/photo1.jpg')
    },
    freeHeight: true
  },
  {
    // Simplest usage.
    // url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=460",
    // url:
    // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527660246058&di=6f0f1b19cf05a64317cbc5d2b3713d64&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0112a85874bd24a801219c7729e77d.jpg",
    // You can pass props to <Image />.
    props: {
      // headers: ...
      source: require('../assets/photo2.jpg')
    },
    freeHeight: true
  }
];

export default class Gallery extends Component {
  static navigationOptions = {
    drawerLabel: 'Gallery',
    drawerIcon: () => <Icon name="albums" />
  };

  state = {
    index: 0,
    modalVisible: true
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header style={{ backgroundColor: '#ff9800' }}>
          <Left>
            <Icon
              name="menu"
              size={30}
              style={{ marginStart: 10 }}
              backgroundColor="#000000"
              onPress={() => this.props.navigation.openDrawer()}
            />
          </Left>
          <Body>
            <Text style={{ fontWeight: 'bold' }}>Gallery</Text>
          </Body>
          <Right />
        </Header>
        <ScrollView>
          <Content padder>
            <Card>
              <CardItem cardBody>
                <Image source={photo1} style={{ height: 200, width: null, flex: 1 }} />
              </CardItem>
              <CardItem style={{ justifyContent: 'center' }}>
                <Text>Grace client meeting</Text>
              </CardItem>
            </Card>
            <Card>
              <CardItem cardBody>
                <Image source={photo2} style={{ height: 200, width: null, flex: 1 }} />
              </CardItem>
              <CardItem style={{ justifyContent: 'center' }}>
                <Text>Chairman</Text>
              </CardItem>
            </Card>
            <Card>
              <CardItem cardBody>
                <Image source={photo3} style={{ height: 200, width: null, flex: 1 }} />
              </CardItem>
              <CardItem style={{ justifyContent: 'center' }}>
                <Text>Grace Award</Text>
              </CardItem>
            </Card>
            <Card>
              <CardItem cardBody>
                <Image source={photo4} style={{ height: 200, width: null, flex: 1 }} />
              </CardItem>
              <CardItem style={{ justifyContent: 'center' }}>
                <Text>Grace Discounts</Text>
              </CardItem>
            </Card>
          </Content>
        </ScrollView>
      </View>
    );
  }
}
