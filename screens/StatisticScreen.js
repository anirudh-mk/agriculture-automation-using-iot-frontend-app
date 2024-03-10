import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { lastCropsDetails, pieCartData } from "../utils/SupportiveDataFile";
import { Dimensions } from "react-native";
import TextCard from "../components/TextCard";
import { PieChart } from "react-native-chart-kit";

const StatisticScreen = () => {
  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };

  const cardContainer = (item) => {
    return (
      <TextCard
        color='#f2f2f2'
        mainHeadding={item.item.crop}
        subHeadding={item.item.date}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.headdingContainer}>
        <Text style={styles.headdingText}>Statistics</Text>
      </View>
      {/* <View style={styles.subHeaddingContainer}>
        <Text style={styles.subHeaddingText}>Top Conrtibuterd</Text>
      </View> */}
      <View style={styles.graphContainer}>
        <PieChart
          data={pieCartData}
          width={screenWidth}
          height={250}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
          center={[screenWidth / 2 - 125, 0]}
          hasLegend={false}
          absolute
        />
      </View>
      <View style={styles.subHeaddingContainer}>
        <Text style={styles.subHeaddingText}>Last Crops</Text>
      </View>
      <View style={styles.scrollingContainer}>
        <FlatList
          style={styles.itemsContainer}
          data={lastCropsDetails}
          renderItem={cardContainer}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    display: "flex",
    flex: 1,
    paddingTop: 24,
    paddingBottom: 70
  },
  headdingContainer: {
    padding: 20,
  },
  headdingText: {
    fontSize: 28,
    fontWeight: "600",
  },
  subHeaddingContainer: {
    padding: 20,
  },
  subHeaddingText: {
    fontSize: 20,
    fontWeight: "500",
  },
  graphContainer: {
    padding: 10,
  },
  scrollingContainer: {
    display: "flex",
    flex: 1,
    padding: 10
  },
});

export default StatisticScreen;
