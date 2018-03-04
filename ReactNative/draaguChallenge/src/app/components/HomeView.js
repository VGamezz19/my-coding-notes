import React, { Component } from 'react';
import {View,Text,Button,ListView,} from 'react-native';

import CardPost from './CardPost'

export default class HomeView extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome Draagu Challeng</Text>
        <Button
          title="Go to ListView!"
          onPress={() => this.props.navigation.navigate('ListViewApp')}
        />
        <ListView
        enableEmptySections={true}
        dataSource={this.props.screenProps.dataSourceList}
        renderRow={post => {
          const postForCard = {
            id: post.id,
            title: post.title.rendered,
            body: post.excerpt.rendered
          }
          return <CardPost content={postForCard} />
        }
        } />
      </View>
    );
  }
}