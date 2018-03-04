import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ListView, TouchableOpacity } from 'react-native'
import { apiDraagu } from '../../api/api-client'

import CardPost from './CardPost'
import ButtonAdd from './ButtonAdd'

let numPage = 1

export default class ListViewApp extends Component {
  constructor(props) {
    super(props);
  }

  getApiPost = () => {
    return apiDraagu().getPage(numPage).then(resPost => {
      this.props.screenProps.updateDataSource(resPost)
    })
  }

  onPressLoadMore = () => {
    this.props.screenProps.execLoad()
    numPage += 1
    this.getApiPost()
  }

  componentDidMount = () => this.getApiPost()

  render() {
    const load = this.props.screenProps.load
    let contentList

    if (load) {
      contentList = <ActivityIndicator size="large" color="#0000ff" />
    } else {
      contentList = <ListView
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
    }

    return (
      <View style={styles.container}>

        {contentList}

        {load ? undefined : (
          <TouchableOpacity
            style={styles.button}
            onPress={this.onPressLoadMore}>
            <Text> Load More </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

//================================
//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  }
})