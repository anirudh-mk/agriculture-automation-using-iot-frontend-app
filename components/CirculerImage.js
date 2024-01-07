import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

const CirculerImage = ({ source, size, top }) => {
  return (
    <View style={{ height:size, alignItems:'center', top:top }}>
      <Image 
        source={ source } 
        style={{ width:size, height:size, borderRadius:size/2 }}
      />
    </View>
  )
}

export default CirculerImage