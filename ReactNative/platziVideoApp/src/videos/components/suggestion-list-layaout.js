import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

function SuggestionListLayaout(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        // flex:1,
        // paddingVertical: 0,
        // flex: 1
    },
    title: {
        color:'#4c4c4c',
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 8,
        fontWeight: 'bold'
    }
})
export default SuggestionListLayaout