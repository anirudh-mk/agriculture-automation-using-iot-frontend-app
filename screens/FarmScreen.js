import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import DetailsCard from '../components/DetailsCard'
import GraphCard from '../components/GraphCard'
const FarmScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.headdingContainer}>
        <Text style={styles.headdingText}>Farm 1</Text>
      </View>
      <ScrollView style={styles.scrollViewContainer}>
        <Text style={styles.subHeadding}>NPK</Text>
        <View style={styles.deailsCardContainer}>
          <DetailsCard
            vagiatableName='Onion'
          />
        </View>
        <Text style={styles.subHeadding}>Live Data</Text>
        <View style={styles.deailsCardContainer}>
          <GraphCard
            vagiatableName='Onion'
            navigation={true}
          />
        </View>
        <Text style={styles.subHeadding}>Market Prediction</Text>
        <View style={styles.deailsCardContainer}>
          <GraphCard
            vagiatableName='Onion'
          />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    display: "flex",
    flex: 1,
    paddingTop: 24,
  },
  headdingContainer: {
    padding: 20,
  },
  headdingText: {
    fontSize: 28,
    fontWeight: "600",
  },
  scrollViewContainer: {
    width: '100%',
    flex: 1
  },
  subHeadding: {
    padding: 20,
    fontSize: 20,
    fontWeight: '600'
  },
  deailsCardContainer: {
    alignItems: 'center',
    padding: 20
  },
})

export default FarmScreen