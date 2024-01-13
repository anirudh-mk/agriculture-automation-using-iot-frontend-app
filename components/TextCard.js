import { Text, TouchableHighlight, StyleSheet, View } from 'react-native'
import React from 'react'

const TextCard = ({ color, height, width, borderRadious, mainHeadding, subHeadding, textColor, onPress, marginTop, marginBottom }) => {
  
  return (
    <TouchableHighlight style={{ 
      justifyContent:'center',
      width:width, 
      height:height, 
      borderRadius:borderRadious, 
      backgroundColor:color,
      marginTop:marginTop?marginTop:0,
      marginBottom:marginBottom?marginBottom:0
      }}
      onPress={ onPress }
    >
        <View>
            <Text style={[styles.mainText,{fontSize:16, color:textColor}]}>{ mainHeadding }</Text>
            <Text style={[styles.subText,{fontSize:16, color:textColor}]}>{ subHeadding }</Text>
        </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    mainText:{
        fontWeight:'600',
        position:'absolute',
        right:20,
    },
    subText:{
        fontWeight:'600',
        left:20
    }
})
export default TextCard