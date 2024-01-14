import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { Dimensions } from 'react-native'

const DetailsCard = ({ marginLeft, marginRight }) => {

    const { width, height } = Dimensions.get('window')

    return (
    <TouchableHighlight style={[
        styles.card,
        { 
            width:width-(marginLeft+marginRight),
             }]}>
        <Text>hwllo</Text>

    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    card:{
        height:182,
        backgroundColor:'tomato'
    }
})

export default DetailsCard