import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import HeaddingText from '../components/HeaddingText'
import colors from '../utils/Colors'
import data from './HomeScreen/HomeScreenSupportFile'
import { Dimensions } from "react-native";
import TextCard from '../components/TextCard'

const StatisticScreen = () => {

const screenWidth = Dimensions.get("window").width;

  const cardContainer = () => {
    return(
      <TextCard
        color={ colors.white }
        height={ 60 }
        width={ screenWidth-30 }
        borderRadious={ 12 }
        name='Login'
        textColor={ colors.black }
        marginBottom={8}
        marginTop={8}
      />
    )
  }

  return (
    <View style={styles.screen}>
      <View style={styles.headdingContainer}>
        <HeaddingText text='Statistics'/>
      </View>
      <View style={styles.headdingTextContainer}>
        <Text style={styles.HeaddingText}>Top Conrtibuterd</Text>
      </View>
      <View style={styles.graphContainer}>

      </View>
      <View>
        <Text style={styles.HeaddingText}>Last Crops</Text>
      </View>
      <View style={styles.scrollingContainer}>
        <FlatList
          style={{width:'100%'}}
          contentContainerStyle={{alignItems:'center'}}
          data={data}
          renderItem={ cardContainer }
          keyExtractor={(item)=>item.id}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    width:'100%',
    flex:1,
  },
  headdingContainer:{
    width:'100%',
    height:100,
  },
  headdingTextContainer:{
    width:'100%',
    height:50,
  },
  HeaddingText:{
    position:'absolute',
    left:19,
    fontSize:20,
    top:10,
  },
  graphContainer:{
    width:'100%',
    height:250,
    backgroundColor:'green',
  },
  scrollingContainer:{
    top:50,
    width:'100%',
    height:285,
  }
})

export default StatisticScreen