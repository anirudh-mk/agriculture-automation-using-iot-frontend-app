import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HeaddingText from '../components/HeaddingText'
import ImageCard from '../components/ImageCard'

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <View>
        <HeaddingText text='Home'/>
      </View>
      <View style={styles.card_container}>
        <ImageCard/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  },
  card_container:{
    alignItems:'center'
  }
})

export default HomeScreen