import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import ImageCard from "../components/ImageCard";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

const HomeScreen = () => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('accessToken');
        const response = await axios.get(
          'http://10.0.2.2:8000/api/v1/user/farm-list/',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        );
        setData(response.data.response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [data]);

  const handleNavigation = (farmId, farmName, vegetableName, timeRequired) => {
    navigation.navigate("farmScreen", { farmId, farmName, vegetableName, timeRequired });
  };

  const renderItem = ({ item }) => {

    if (Object.keys(item.vegetable).length === 0) {

      const id = item.id
      const farmName = item.farm_name


      return (
        <ImageCard
          banner={require("../assets/plus.png")}
          farm={item.farm_name}
          vegetable={item.vegetable_name}
          daysLeft={item.days_remaining + " days left"}
          onPress={() => navigation.navigate("farmCreateScreen", { id, farmName })}
        />
      )
    } if (Object.keys(item.vegetable).length !== 0) {
      // Render the ImageCard as usual
      return (
        <ImageCard
          banner={require("../assets/tomato.png")}
          farm={item.farm_name}
          vegetable={item.vegetable.name} // accessing the name property of vegetable
          daysLeft={item.vegetable.time_require + " days left"} // accessing the time_require property of vegetable
          onPress={() => handleNavigation(item.id, item.farm_name, item.vegetable.name, item.vegetable.time_require)}
        />
      );
    }
  };

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "100%" }}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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
