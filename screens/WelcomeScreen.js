import { View, Text } from 'react-native'
import React from 'react'
import CirculerImage from '../components/CirculerImage'
import TextButton from '../components/TextButton'
const WelcomeScreen = () => {
  return (
    <View>
      <CirculerImage 
        source={require('../assets/icon.png')}
        size={330}
        border={0}
        top={143}
      />
      <TextButton
        width={240}
        height={59}
        top={300}
        color='#000'
        border_radious={20}
        name='Get Started'
        text_color='#117B01'
      />
    </View>
  )
}

export default WelcomeScreen