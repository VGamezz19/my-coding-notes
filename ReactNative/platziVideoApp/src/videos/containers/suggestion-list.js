import React, { Component } from 'react'
import { FlatList, Text } from 'react-native'
import Layaout from '../components/suggestion-list-layaout'
import Empty from '../components/empty'
import Separator from '../components/vertical-separator'
const list = [
    {
        title: 'Avengers',
        key: '1'
    },
    {
        title: 'Pokemon',
        key: '2'
    }
]

const NO_SUGGESTIONS_MSG="No hay sugerencias"
const TITLE_LIST = "Recomendado para ti"

class SuggestionList extends Component {

    renderItems({ item }) {
        return <Text>{item.title}</Text>
    }

    render() {
        return (
            <Layaout
                title={TITLE_LIST}>
                <FlatList 
                    data={list}
                    ListEmptyComponent={() => <Empty text={NO_SUGGESTIONS_MSG}></Empty>}
                    ItemSeparatorComponent={()=> <Separator/>}
                    renderItem={this.renderItems}/>
            </Layaout>
        )
    }
}

export default SuggestionList