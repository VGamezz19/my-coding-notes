import React, { Component } from 'react';
import { Button } from 'react-native-elements'

export default class ButtonAdd extends Component{

    render() {
        return (
            <Button
                icon={{ name: 'code' }}
                backgroundColor='#03A9F4'
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='LOAD MORE' />
        );
    }
}