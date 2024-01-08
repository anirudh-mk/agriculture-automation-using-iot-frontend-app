import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HeaddingText from '../components/HeaddingText'
import ImageCard from '../components/ImageCard'

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.headding_container}>
        <HeaddingText text='Home'/>
      </View>
      <View style={styles.card_container}>
        <ImageCard
          farm='Farm 1'
          vegitable='tomato'
          days_left='20 days left'
          banner={require('../assets/tomato.png')}
        />
        <ImageCard
          farm='Farm 2'
          vegitable='Onion'
          days_left='3 days left'
          banner={require('../assets/tomato.png')}
        />
        
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
  },
  headding_container:{
    height:100
  }
})

export default HomeScreen