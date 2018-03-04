import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements'

export default class CardPost extends Component {
  render() {
    return (
      <Card
        key={this.props.content.id}
        title={this.props.content.title}
        image={require('../../../public/img/defaultimg.jpg')}>
        <Text style={{ marginBottom: 10 }}>
          {this.props.content.body}
        </Text>
      </Card>
    );
  }
}