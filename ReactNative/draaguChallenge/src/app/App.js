import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { ActivityIndicator, ListView } from 'react-native'


import HomeView from './components/HomeView'
import ListViewApp from './components/ListViewApp'

const RootNavigator = StackNavigator(
  {
    Home: {
      screen: HomeView,
      navigationOptions: {
        headerTitle: 'Home',
      }
    },
    ListViewApp: {
      screen: ListViewApp,
      navigationOptions: {
        headerTitle: 'ListViewApp',
      }
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        dataSourceList: new ListView.DataSource({
          rowHasChanged: (r1, r2) => {
            r1 !== r2
          }
        }),
        load: true
      }
  }

  updateDataSource = (data) => {
    this.setState({
      dataSourceList: this.state.dataSourceList.cloneWithRows(data),
      load: false
    })
  }

  execLoad = () => this.setState({ load: true })

  render() {
    return <RootNavigator screenProps={{ dataSourceList: this.state.dataSourceList, load: this.state.load, execLoad: this.execLoad, updateDataSource: this.updateDataSource }} />
  }
}

