import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HeaddingText from '../components/HeaddingText'
import { ScrollView } from 'react-native-gesture-handler'

const FarmScreen = ({ farmName, }) => {
  return (
    <View style={styles.screen}>
        <View style={styles.headdingContainer}>
            <HeaddingText style={styles.headdingText} text='Farm 1'/>
        </View>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.subHeadding}>Hello</Text>
        </ScrollView>
        <View style={styles.new}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    backgroundColor:'green'
  },
  headdingContainer:{
    backgroundColor:'tomato',
    height:100,
    width:'100%'
  },
  scrollView:{
    width:'100%',
    backgroundColor:'yellow',
    height:100,
  },
  subHeadding:{
    padding:20,
    fontSize:20,
    fontWeight:'600'
  }
})

export default FarmScreen