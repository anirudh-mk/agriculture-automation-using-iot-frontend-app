import { View, Text, StyleSheet } from "react-native";
import React from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import IconTextButton from "../components/IconTextButton";
import CirculerImage from "../components/CirculerImage";
import colors from "../utils/Colors";

const UserScreen = () => {
  const navigation = useNavigation();
  handleLogoutPress = () => {
    navigation.navigate('loginScreen')
  }

  // const handleLogout = (async) => {
  //   try {
  //     AsyncStorage.removeItem("isLogin");
  //     navigation.navigate("loginScreen");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <View style={styles.screen}>
      <View style={styles.headdingContainer}>
        <Text style={styles.headdingText}>User</Text>
      </View>
      <View style={styles.imageContainer}>
        <CirculerImage
          source={require("../assets/user.png")}
          size={150}
        />
        <Text style={styles.userName}>Anirudh MK</Text>
        <Text style={styles.userEmail}>anirudhmk123@gmail.com</Text>
      </View>
      <View style={styles.buttonContainer}>
        <IconTextButton
          name="User"
          icon="at"
        />
        <IconTextButton
          name="Contact us"
          icon="message"
        />
      </View>
      <View style={styles.logoutContainer}>
        <IconTextButton
          name="Logout"
          icon="logout"
          onPress={handleLogoutPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: "column",
    paddingBottom: 80,
    paddingTop: 24,
  },
  headdingContainer: {
    display: "flex",
    padding: 20
  },
  headdingText: {
    fontSize: 28,
    fontWeight: "600",
  },
  imageContainer: {
    width: "100%",
    padding: 10,
    alignItems: "center",
  },
  userName: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: "600",
  },
  userEmail: {
    padding: 5,
    fontSize: 16,
    fontWeight: "600",
    color: colors.gray,
  },
  buttonContainer: {
    flex: 1,
    padding: 20,
    alignItems: "center",

  },
  logoutContainer: {
    padding: 20,
    alignItems: "center",
  },
});

export default UserScreen;
