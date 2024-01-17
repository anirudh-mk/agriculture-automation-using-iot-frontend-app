import {
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../utils/Colors";

const TextButton = ({
  color,
  height,
  width,
  borderRadious,
  name,
  textColor,
  onPress,
  icon,
  textPosition,
  marginBottom,
  iconColor,
}) => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <TouchableHighlight
      style={[
        styles.screen,
        {
          width: screenWidth - 40,
          height: height,
          borderRadius: borderRadious,
          backgroundColor: color,
          marginBottom: marginBottom ? marginBottom : 0,
        },
      ]}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          style={styles.iconStyle}
          name={icon}
          size={20}
          color={iconColor ? iconColor : colors.black}
        />
        <Text
          style={[
            styles.text,
            {
              color: textColor,
              textAlign: textPosition ? textPosition : "center",
            },
          ]}
        >
          {name}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  screen: {
    position: "relative",
    justifyContent: "center",
  },
  text: {
    width: "100%",
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: "600",
  },
  iconContainer: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
  },
  iconStyle: {
    position: "absolute",
    left: 12,
  },
});
export default TextButton;
