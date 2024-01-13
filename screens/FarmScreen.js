import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HeaddingText from '../components/HeaddingText'

const FarmScreen = ({ farmName, }) => {
  return (
    <View style={styles.screen}>
        <View style={styles.headdingContainer}>
            <HeaddingText text={ farmName }/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    flexDirection:'row',
  },
  headdingContainer:{
    
  }
})

export default FarmScreen