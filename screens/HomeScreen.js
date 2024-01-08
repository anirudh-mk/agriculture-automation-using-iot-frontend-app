import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HeaddingText from '../components/HeaddingText'
import ImageCard from '../components/ImageCard'

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <HeaddingText text='Home'/>
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    alignItems:'center'
  }
})

export default HomeScreen