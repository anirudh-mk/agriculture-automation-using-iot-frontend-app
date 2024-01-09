import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'

const TextButton = ({ color, height, width, border_radious, name, text_color }) => {
  return (
    <TouchableHighlight style={{ 
      width:width, 
      height:height, 
      borderRadius:border_radious, 
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:color,
      }}>
        <Text style={{
          color:text_color,
          fontSize:16,
          fontWeight:'600'
          }}
        >
        {name}
        </Text>
    </TouchableHighlight>
  )
}

export default TextButton