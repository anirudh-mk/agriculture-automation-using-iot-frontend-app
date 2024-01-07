import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

const CirculerImage = ({ source, size, top, border, border_color }) => {
  return (
    <View style={{ height:size, alignItems:'center', top:top }}>
      <View 
        style={{ 
          width:size+border, 
          height:size+border, 
          borderRadius:(size+border)/2, 
          backgroundColor:border_color,
          alignItems:'center',
          justifyContent:'center'
          }}>
        <Image 
          source={ source } 
          style={{ width:size, height:size, borderRadius:size/2 }}
        />
      </View>
    </View>
  )
}


export default CirculerImage