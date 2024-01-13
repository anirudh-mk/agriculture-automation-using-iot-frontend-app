import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import HeaddingText from '../components/HeaddingText'
import colors from '../utils/Colors'
import { lastCropsDetails, pieCartData } from '../utils/SupportiveDataFile'
import { Dimensions } from "react-native";
import TextCard from '../components/TextCard'
import { PieChart } from "react-native-chart-kit";

const StatisticScreen = () => {

  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const cardContainer = (item) => {
    return(
      <TextCard
        color={ colors.white }
        height={ 60 }
        width={ screenWidth-30 }
        borderRadious={ 12 }
        mainHeadding={ item.item.crop}
        subHeadding={item.item.date}
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
        <PieChart
          data={pieCartData}
          width={screenWidth}
          height={250}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
          center={[(screenWidth/2)-125, 0]}
          hasLegend={false}
          absolute
        />
      </View>
      <View>
        <Text style={styles.HeaddingText}>Last Crops</Text>
      </View>
      <View style={styles.scrollingContainer}>
        <FlatList
          style={{width:'100%'}}
          contentContainerStyle={{alignItems:'center'}}
          data={lastCropsDetails}
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
  },
  scrollingContainer:{
    top:50,
    width:'100%',
    height:315,
  }
})

export default StatisticScreen