import { View, Text } from 'react-native'
import React from 'react'
import HeaddingText from '../components/HeaddingText'
import CirculerImage from '../components/CirculerImage'
import colors from '../utils/Colors'

const UserScreen = () => {
  return (
    <View>
      <HeaddingText text='User'/>
      <CirculerImage 
        source={require('../assets/favicon.png')} 
        size={100} 
        top={200}
        border={10}
        border_color={colors.primary}
        />
    </View>
  )
}
export default UserScreen