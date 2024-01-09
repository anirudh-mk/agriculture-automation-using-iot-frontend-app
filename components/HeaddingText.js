import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import colors from '../utils/Colors'

const HeaddingText = ({ text }) => {
  return (
    <View style={ styles.textContainer }>
      <Text style={ styles.text }>{ text }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textContainer:{
        height:48,
        top:44,
        left:20
    },
    text:{
        fontSize:32,
        color:colors.black,
    }
})

export default HeaddingText