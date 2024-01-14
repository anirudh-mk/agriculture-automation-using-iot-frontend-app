import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HeaddingText from '../components/HeaddingText'

const FarmScreen = ({ farmName, }) => {
  return (
    <View style={styles.screen}>
        <View style={styles.headdingContainer}>
            <HeaddingText style={styles.headdingText} text='Farm 1'/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'green'
  },
  headdingContainer:{
    backgroundColor:'tomato',
    height:100,
    width:'100%'
  },
})

export default FarmScreen