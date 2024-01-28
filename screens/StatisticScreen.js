import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import colors from "../utils/Colors";
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
        color={colors.white}
        height={60}
        width={screenWidth - 30}
        borderRadious={12}
        mainHeadding={item.item.crop}
        subHeadding={item.item.date}
        textColor={colors.black}
        marginBottom={8}
        marginTop={8}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.headdingContainer}>
        <Text style={styles.headdingText}>Statistics</Text>
      </View>
      <View style={styles.subHeaddingContainer}>
        <Text style={styles.subHeaddingText}>Top Conrtibuterd</Text>
      </View>
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
          style={{ width: "100%" }}
          contentContainerStyle={{ alignItems: "center" }}
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
    width: "100%",
    paddingTop: 24,
  },
  headdingContainer: {
    display: "flex",
    justifyContent: "center",
    height: 80,
    width: "100%",
    paddingLeft: 20,
  },
  headdingText: {
    fontSize: 28,
    fontWeight: "400",
  },
  subHeaddingContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: 50,
    paddingLeft: 20,
  },
  subHeaddingText: {
    fontSize: 20,
    fontWeight: "400",
  },
  graphContainer: {
    width: "100%",
    height: 250,
  },
  scrollingContainer: {
    display: "flex",
    flex: 1,
    width: "100%",
  },
});

export default StatisticScreen;
