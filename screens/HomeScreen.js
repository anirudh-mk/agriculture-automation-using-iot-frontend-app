import { View, StyleSheet, FlatList } from 'react-native'
import React from 'react'

import ImageCard from '../components/ImageCard'

const HomeScreen = () => {

  const data = [
    { id:'1', farmName:'farm1', vegitableName:'apple', dayLeft:20},
    {id:'2', farmName:'farm2', vegitableName:'orange', dayLeft:20},
    {id:'3', farmName:'farm2', vegitableName:'orange', dayLeft:20},
    {id:'4', farmName:'farm2', vegitableName:'orange', dayLeft:20},
    {id:'5', farmName:'farm2', vegitableName:'orange', dayLeft:20}
  ]

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
        data={ data }
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