import { Text, TouchableHighlight } from 'react-native'
import React from 'react'

const TextButton = ({ color, height, width, borderRadious, name, textColor, onPress }) => {
  
  return (
    <TouchableHighlight style={{ 
      alignItems:'center',
      justifyContent:'center',
      width:width, 
      height:height, 
      borderRadius:borderRadious, 
      backgroundColor:color,
      }}
      onPress={ onPress }
    >
        <Text style={{
          fontSize:16,
          fontWeight:'600',
          color:textColor,
          }}
        >
          { name }
        </Text>
    </TouchableHighlight>
  )
}

export default TextButton