import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { Dimensions } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { TouchableHighlight } from 'react-native-gesture-handler'
import colors from '../utils/Colors'
import {
  LineChart,
} from "react-native-chart-kit";

const DetailsCard = ({ marginLeft, marginRight, borderRadius, vagiatableName }) => {

    const { width, height } = Dimensions.get('window')

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

    const data = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ],
      legend: ["Rainy Days"] // optional
    };

    return (
    <TouchableHighlight style={[
        styles.card,
        {
            width:width-(marginLeft+marginRight),
            borderRadius:borderRadius,
             }]}>
        <View>
          <LineChart
            data={data}
            width={screenWidth}
            height={256}
            verticalLabelRotation={30}
            chartConfig={chartConfig}
            bezier
          />
        </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    card:{
        height:233,
        borderWidth: 1,
        borderColor: 'rgba(10, 109, 247, 0.19)',
        backgroundColor: 'rgba(250, 250, 250, 0.00)',
        shadowColor: 'rgba(38, 110, 211, 0.24)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 10,
    },
    heddingText:{
        fontSize:12,
        fontWeight:'600',
        top:27,
        left:20,
    },
    icon:{
        top:50,
        left:20,
        position:'absolute'
    },
    subHeadding:{
        position:'absolute',
        top:50,
        left:36,
        fontSize:10,
        color:colors.gray

    },
    grapContainer:{
        position:'absolute',
        backgroundColor:'tomato',
        top:80,
        width:'100%',
        height:100,
        flex:1,
        flexDirection:'row'
    }
})

export default DetailsCard