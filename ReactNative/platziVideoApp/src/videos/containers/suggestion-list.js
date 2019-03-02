import React, { Component } from 'react'
import { FlatList, Text } from 'react-native'
import Layaout from '../components/suggestion-list-layaout'
import Empty from '../components/empty'
import Separator from '../components/vertical-separator'
import Suggestion from '../components/suggestion'

const NO_SUGGESTIONS_MSG="No hay sugerencias"
const TITLE_LIST = "Recomendado para ti"

class SuggestionList extends Component {

    renderItems({ item }) {
        return <Suggestion {...item}/>
    }

    render() {
        return (
            <Layaout
                title={TITLE_LIST}>
                <FlatList
                    //Si no tenemos un elemento llamado Key, tendremos que definir usar la propiedad keyExtrator
                    // y definir que propiedad sera la que vaya a ser la Key.
                    keyExtractor={(item) => item.id.toString()}
                    data={this.props.list}
                    ListEmptyComponent={() => <Empty text={NO_SUGGESTIONS_MSG}></Empty>}
                    ItemSeparatorComponent={()=> <Separator/>}
                    renderItem={this.renderItems}/>
            </Layaout>
        )
    }
}

export default SuggestionList