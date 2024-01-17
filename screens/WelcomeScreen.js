import { View, Text, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import CirculerImage from "../components/CirculerImage";
import TextButton from "../components/TextButton";

import colors from "../utils/Colors";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [shouldRenderLogin, setShouldRenderLogin] = useState(false);
  const [navigationError, setNavigationError] = useState(false);

  // useEffect(()=>{
  //   const handleWelcome = async () => {
  //     try{
  //       const isFirstTime = await AsyncStorage.getItem('isFirstTime')
  //       const isLogin = await AsyncStorage.getItem('isLogin')

  //       if (isLogin === 'true'){
  //         navigation.navigate('mainScreen')
  //       }
  //       else if (isFirstTime === 'true'){
  //         setShouldRenderLogin(true)
  //       }
  //     } catch(error){
  //       console.log(error)
  //     }finally{
  //       setLoading(false)
  //     }
  //   }
  //   handleWelcome();
  // },[navigation])

  const handleNavigation = async () => {
    navigation
      .navigate("loginScreen")
      .then(() => {
        setNavigationError(false);
      })
      .catch((error) => {
        setNavigationError(true);
      });
  };

  if (navigationError) {
    return (
      <View
        style={{
          width: "100%",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 14 }}>
          Something went wrong please try again
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <CirculerImage source={require("../assets/icon.png")} size={330} />
      </View>
      <View style={styles.buttonContainer}>
        <TextButton
          width={300}
          height={60}
          color={colors.white}
          borderRadious={15}
          name="Get Started"
          textColor={colors.secondery}
          onPress={handleNavigation}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Farming simplified Automated</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    backgroundColor:
      "linear-gradient(185deg, #127F00 3.84%, rgba(28, 190, 25, 0.81) 97.65%)",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
  imageContainer: {
    position: "absolute",
    top: 88,
  },
  buttonContainer: {
    position: "absolute",
    top: 609,
  },
  textContainer: {
    position: "absolute",
    top: 686,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.white,
  },
});

export default WelcomeScreen;
