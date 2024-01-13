import { View, StyleSheet, FlatList } from 'react-native'
import React from 'react'

import ImageCard from '../components/ImageCard'

import { homeScreenFarmData } from '../utils/SupportiveDataFile'

const HomeScreen = () => {

  const renderItem = (item) => {
    return(
      <ImageCard 
        banner={ require('../assets/tomato.png') }
        farm={ item.item.farmName }
        vegitable={ item.item.vegitableName }
        daysLeft={ item.item.dayLeft + 'day left' }
      />
    )
  }

  return (
    <View style={ styles.screen }>
      <FlatList
        style={{ width:'100%' }}
        contentContainerStyle={{ alignItems:'center' }}
        data={ homeScreenFarmData }
        renderItem={ renderItem }
        keyExtractor={ (item)=> item.id }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    alignItems:'center',
    paddingTop:25,
    paddingBottom:80,
  }
})

export default HomeScreen