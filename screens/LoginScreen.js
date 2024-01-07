import { View, Text } from 'react-native'
import React from 'react'
import CirculerImage from '../components/CirculerImage'
const LoginScreen = () => {
  return (
    <View>
      <CirculerImage 
        source={require('../assets/icon.png')}
        size={330}
        border={0}
        top={143}
        
      />
    </View>
  )
}

export default LoginScreen