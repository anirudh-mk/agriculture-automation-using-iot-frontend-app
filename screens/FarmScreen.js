import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HeaddingText from '../components/HeaddingText'
import { ScrollView } from 'react-native-gesture-handler'
import DetailsCard from '../components/DetailsCard'
import GraphCard from '../components/GraphCard'

const FarmScreen = ({ farmName, }) => {
  return (
    <View style={styles.screen}>
        <View style={styles.headdingContainer}>
            <HeaddingText style={styles.headdingText} text='Farm 1'/>
        </View>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.subHeadding}>Hello</Text>
          <View style={styles.deailsCardContainer}>
            <DetailsCard
              marginLeft={18}
              marginRight={18}
              borderRadius={10}
              vagiatableName='Onion'
            />
          </View>
          <View style={styles.deailsCardContainer}>
            <GraphCard
              marginLeft={18}
              marginRight={18}
              borderRadius={10}
              vagiatableName='Onion'
            />
          </View>
        </ScrollView>
        <View style={styles.new}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
  },
  headdingContainer:{
    height:100,
    width:'100%'
  },
  scrollView:{
    width:'100%',
    height:100,
  },
  subHeadding:{
    padding:20,
    fontSize:20,
    fontWeight:'600'
  },
  deailsCardContainer:{
    alignItems:'center'
  },
})

export default FarmScreen