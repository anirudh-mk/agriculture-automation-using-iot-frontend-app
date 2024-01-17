import React from 'react'
import {Image} from 'react-native'

const CirculerImage = ({source, size}) => {
  return (
        <Image 
          source={source} 
          style={{ 
            width:size, 
            height:size, 
            borderRadius:size/2 
          }}
        />
  )
}

export default CirculerImage