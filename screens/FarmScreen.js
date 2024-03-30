import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import DetailsCard from '../components/DetailsCard'
import GraphCard from '../components/GraphCard'


const FarmScreen = ({ route }) => {
  const { farmId } = route.params;

  console.log('====================================');
  console.log(farmId);
  console.log('====================================');
  return (
    <View style={styles.screen}>
      <View style={styles.headdingContainer}>
        <Text style={styles.headdingText}>Farm 1</Text>
      </View>
      <ScrollView style={styles.scrollViewContainer}>
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
    paddingTop: 28,
    backgroundColor: 'white'
  },
  headdingContainer: {
    paddingLeft: 16,
    paddingVertical: 10
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
    paddingLeft: 16,
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: '600'
  },
  deailsCardContainer: {
    alignItems: 'center',
    padding: 16
  },
})

export default FarmScreen