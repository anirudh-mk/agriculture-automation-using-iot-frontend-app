import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const HeaddingText = ({text}) => {
  return (
    <View style={styles.text_container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text_container:{
        height:48,
        top:44,
        left:20
    },
    text:{
        color:'#000',
        fontSize:32,
    }
})

export default HeaddingText