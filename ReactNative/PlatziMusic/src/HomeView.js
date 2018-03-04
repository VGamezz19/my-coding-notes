/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import ArtistList from './ArtistList'
import { getArtists } from './api-client'

export default class HomeView extends Component {
  state = {
    artists: [],
    load: true
  }

  componentDidMount() {
    getArtists()
      .then(data => this.setState({ artists: data, load: false}))
  }

  render() {
    const artists = this.state.artists

    if(this.state.load) {
      contentHome = <ActivityIndicator size="large" color="#0000ff" />
    } else {
      contentHome = <ArtistList artists={artists} navigation ={this.props.navigation}/>
    }

    return (
      <View style={styles.container}>
        {contentHome}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  },
});