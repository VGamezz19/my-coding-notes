import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import FBSDK, {
  LoginButton,
  AccessToken
} from 'react-native-fbsdk'

import firebase, { firebaseAuth } from "./firebase";

const { FacebookAuthProvider } = firebase.auth
//const firebaseAuth = firebase.auth()

export default class LoginView extends Component {
  state = {
    credential: null
  }

  componentWillMount() {
    this.authenticateUser();
  }

  authenticateUser = () => {
    const { navigate } = this.props.navigation;
    AccessToken.getCurrentAccessToken().then((data) => {
      const { accessToken } = data
      const credential = FacebookAuthProvider.credential(accessToken)
      firebaseAuth.signInWithCredential(credential).then( credentials => {
        //firebase nos proporciona informacion del usuario logeado.
        this.setState({ credentials })
        navigate('Home')
        

      }, (error) => {
        alert("Sing in error, please try again.")
      })
    })
  }

  // handelButtonPres = () => {
  //   const { navigate } = this.props.navigation;
  //   navigate('Home')
  // }

  render() {
    
    return (
      <View style={styles.container}>
        <Text>Bienvenidos a PlatziMusic</Text>
        
        <Text style={styles.welcome}>
        {/* Si existe credentials y credentials.displayName... imprimelo */}
          {this.state.credentials && this.state.credentials.displayName}
        </Text>
        {/* <Button onPress={this.handelButtonPres} title = 'Siguiente'/> */}
        <LoginButton
          readPermissions={["public_profile", 'email']}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    this.authenticateUser()
                    //navigate('Home')
                    //navigate('Home') ahora esta dentr ode la funcion authenticateUser
                  }
                )
              }
            }
          }
          onLogoutFinished={() => {
            alert("logout.")
            }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcom: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20
  }
});