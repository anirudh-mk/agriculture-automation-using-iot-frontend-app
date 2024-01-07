import { View, Text } from 'react-native'
import React from 'react'
import HeaddingText from '../components/HeaddingText'
import CirculerImage from '../components/CirculerImage'

const UserScreen = ({ size }) => {
  return (
    <View>
      <HeaddingText text='User'/>
      <CirculerImage source={require('../assets/favicon.png')} size={100} />
    </View>
  )
}
export default UserScreen