import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import IconTextButton from "../components/IconTextButton";
import CirculerImage from "../components/CirculerImage";
import colors from "../utils/Colors";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

const UserScreen = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  const handleLogoutPress = () => {
    navigation.navigate('loginScreen');
  };

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('accessToken');
        const response = await axios.get(
          'http://anirudhmk123.pythonanywhere.com/api/v1/user/basic-details/',
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
  }, []);

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
        {data.length > 0 && (
          <>
            <Text style={styles.userName}>{data[0].first_name} {data[0].last_name}</Text>
            <Text style={styles.userEmail}>{data[0].email}</Text>
          </>
        )}
      </View>
      <View style={styles.buttonContainer}>
        {data.length > 0 && (
          <>
            <IconTextButton
              name={data[0].username}
              icon="at"
            />
            <IconTextButton
              name="Contact us"
              icon="message"
            />
          </>
        )}
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
