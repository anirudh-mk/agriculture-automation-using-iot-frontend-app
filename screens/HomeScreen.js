import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ImageCard from "../components/ImageCard";
import { homeScreenFarmData } from "../utils/SupportiveDataFile";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate("farmScreen");
  };

  const renderItem = (item) => {
    return (
      <ImageCard
        banner={require("../assets/tomato.png")}
        farm={item.item.farmName}
        vegetable={item.item.vegitableName}
        daysLeft={item.item.dayLeft + "day left"}
        onPress={handleNavigation}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "100%" }}
        data={homeScreenFarmData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
});

export default HomeScreen;
