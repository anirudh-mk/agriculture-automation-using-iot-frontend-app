import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { Dimensions } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { TouchableHighlight } from 'react-native-gesture-handler'
import colors from '../utils/Colors'


const DetailsCard = ({ marginLeft, marginRight, borderRadius, vagiatableName }) => {

    const { width, height } = Dimensions.get('window')

    return (
    <TouchableHighlight style={[
        styles.card,
        {
            width:width-(marginLeft+marginRight),
            borderRadius:borderRadius,
             }]}>
        <View>
    
        </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    card:{
        height:182,
        borderWidth: 1,
        borderColor: 'rgba(10, 109, 247, 0.19)',
        backgroundColor: 'rgba(250, 250, 250, 0.00)',
        shadowColor: 'rgba(38, 110, 211, 0.24)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 10,
    },
    heddingText:{
        fontSize:12,
        fontWeight:'600',
        top:27,
        left:20,
    },
    icon:{
        top:50,
        left:20,
        position:'absolute'
    },
    subHeadding:{
        position:'absolute',
        top:50,
        left:36,
        fontSize:10,
        color:colors.gray

    },
    grapContainer:{
        position:'absolute',
        backgroundColor:'tomato',
        top:80,
        width:'100%',
        height:100,
        flex:1,
        flexDirection:'row'
    }
})

export default DetailsCard