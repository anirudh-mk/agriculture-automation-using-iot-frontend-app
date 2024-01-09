import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const CirculerImage = ({ source, size, border, borderColor }) => {
  return (
      <View 
        style={ [styles.circulerBorder,{ 
          width:size+border, 
          height:size+border, 
          borderRadius:(size+border)/2, 
          backgroundColor:borderColor,
          }] }>
        <Image 
          source={ source } 
          style={{ 
            width:size, 
            height:size, 
            borderRadius:size/2 
          }}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  circulerBorder:{
    alignItems:'center',
    justifyContent:'center',
  }
})

export default CirculerImage