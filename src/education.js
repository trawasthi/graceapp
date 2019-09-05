import React, { Component } from 'react';

import { View, Text } from 'react-native';

export default class Education extends Component {
  static navigationOptions = {
    title: 'Education'
  };

  render() {
    return (
      <View>
        <Text>
          Australia is a land of opportunities with people coming from diverse cultures and
          heritages of different nations. Australia offers a diverse range of study options for
          international and national students, with more than 1200 institutes and offer 22000
          courses to choose from an education system that really makes a difference. Enterprise
          owners around the world prefer Australian graduates and professionals. In Australia
          students develop capability in critical & creative thinking as they learn to generate &
          evaluate knowledge, clarifying concepts & ideas, seek possibilities, consider alternatives
          & solve problems.
        </Text>
      </View>
    );
  }
}
