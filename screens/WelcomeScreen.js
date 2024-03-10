import { View, Text, StyleSheet } from "react-native";
import CirculerImage from "../components/CirculerImage";
import TextButton from "../components/TextButton";
import colors from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  handleGetStart = () => {
    navigation.navigate("loginScreen");
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
          onPress={handleGetStart}
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
    flexDirection: "column",
    backgroundColor:
      "linear-gradient(185deg, #127F00 3.84%, rgba(28, 190, 25, 0.81) 97.65%)",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
  imageContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 88,
  },
  buttonContainer: {
    display: "flex",
    width: "100%",
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    marginBottom: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.white,
  },
});

export default WelcomeScreen;
