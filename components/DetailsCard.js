import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { Dimensions } from 'react-native'

const DetailsCard = ({ marginLeft, marginRight, borderRadius, vagiatableName }) => {

    const { width, height } = Dimensions.get('window')

    return (
    <TouchableHighlight style={[
        styles.card,
        {
            width:width-(marginLeft+marginRight),
            borderRadius:borderRadius,
             }]}>
        <Text style={styles.heddingText}>{vagiatableName}</Text>

    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    card:{
        height:182,
        backgroundColor:'tomato'
    },
    heddingText:{
        fontSize:12,
        fontWeight:'600',
        top:27,
        left:20,
    }
})

export default DetailsCard