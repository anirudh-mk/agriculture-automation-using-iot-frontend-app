import { View, StyleSheet } from 'react-native'
import React from 'react'

import HeaddingText from '../components/HeaddingText'
import CirculerImage from '../components/CirculerImage'

import colors from '../utils/Colors'

const UserScreen = () => {
  return (
    <View style={ styles.screen }>
      <View style={ styles.headdingContainer }>
        <HeaddingText text='User'/>
      </View>
      <View style={ styles.imageContainer }>
        <CirculerImage 
          source={ require('../assets/favicon.png') } 
          size={ 100 } 
          border={ 10 }
          borderColor={ colors.primary }
          />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
  },
  headdingContainer:{
    height:100,
  },
  imageContainer:{
    top:200,
  }
})

export default UserScreen