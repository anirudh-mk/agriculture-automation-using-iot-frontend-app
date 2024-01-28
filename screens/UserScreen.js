import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import IconTextButton from "../components/IconTextButton";
import CirculerImage from "../components/CirculerImage";
import colors from "../utils/Colors";

const UserScreen = () => {
  const navigation = useNavigation();

  const handleLogout = (async) => {
    try {
      AsyncStorage.removeItem("isLogin");
      navigation.navigate("loginScreen");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.headdingContainer}>
        <Text style={styles.headdingText}>User</Text>
      </View>
      <View style={styles.imageContainer}>
        <CirculerImage
          source={require("../assets/user.png")}
          size={121}
          border={0}
          borderColor={colors.gray}
        />
        <Text style={styles.userName}>Anirudh MK</Text>
        <Text style={styles.userEmail}>anirudhmk123@gmail.com</Text>
      </View>
      <View style={styles.buttonContainer}>
        <IconTextButton
          color={colors.white}
          height={60}
          width="90%"
          borderRadious={12}
          name="User"
          textColor={colors.black}
          icon="at"
          textPosition="right"
          marginBottom={20}
        />
        <IconTextButton
          color={colors.white}
          height={60}
          width="90%"
          borderRadious={12}
          name="Contact us"
          textColor={colors.black}
          icon="message"
          textPosition="right"
        />
      </View>
      <View style={styles.logoutContainer}>
        <IconTextButton
          color={colors.white}
          height={60}
          width="90%"
          borderRadious={12}
          name="Logout"
          textColor={colors.tomato}
          icon="logout"
          textPosition="right"
          iconColor={colors.tomato}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    paddingBottom: 80,
    paddingTop: 24,
  },
  headdingContainer: {
    display: "flex",
    height: 80,
    width: "100%",
    justifyContent: "center",
    paddingLeft: 20,
  },
  headdingText: {
    fontSize: 28,
    fontWeight: "600",
  },
  imageContainer: {
    width: "100%",
    paddingBottom: 20,
    alignItems: "center",
  },
  userName: {
    paddingTop: 10,
    fontSize: 12,
    fontWeight: "600",
  },
  userEmail: {
    paddingTop: 5,
    fontSize: 10,
    fontWeight: "600",
    color: colors.gray,
  },
  buttonContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: "center",
  },
  logoutContainer: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UserScreen;
