import { View, StyleSheet } from 'react-native'
import React from 'react'

import HeaddingText from '../components/HeaddingText'
import ImageCard from '../components/ImageCard'

const HomeScreen = () => {
  return (
    <View style={ styles.screen }>
      <View style={ styles.headdingContainer }>
        <HeaddingText text='Home'/>
      </View>
      <View style={ styles.cardContainer }>
        <ImageCard
          banner={ require('../assets/tomato.png') }
          farm='Farm 1'
          vegitable='tomato'
          daysLeft='20 days left'
        />
        <ImageCard
          banner={ require('../assets/tomato.png') }
          farm='Farm 2'
          vegitable='Onion'
          daysLeft='3 days left'
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex:1
  },
  cardContainer:{
    alignItems:'center'
  },
  headdingContainer:{
    height:100
  }
})

export default HomeScreen