import { View, StyleSheet } from "react-native";
import React, { useState } from "react";

import { TextInput } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

import colors from "../utils/Colors";

const IconTextInput = ({
  height,
  icon,
  placeholder,
  color,
  borderRadious,
  onChangeText,
}) => {
  const screenWidth = Dimensions.get("window").width;
  const [containerWidth, setContainerWidth] = useState(0);

  const handleLayout = (event) => {
    const width = event.nativeEvent.layout.width;
    setContainerWidth(width);
  };

  return (
    <View
      style={[
        styles.screen,
        {
          width: screenWidth - 40,
          height: height,
          backgroundColor: color,
          borderRadius: borderRadious,
        },
      ]}
      onLayout={handleLayout}
    >
      <View style={[styles.iconContainer, { width: height }]}>
        <MaterialCommunityIcons name={icon} size={20} color={colors.gray} />
      </View>
      <TextInput
        style={[
          styles.textInput,
          {
            left: height,
            height: height,
            width: containerWidth - (height + 10),
          },
        ]}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
    position: "relative",
  },
  iconContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    left: 0,
  },
  textInput: {
    position: "absolute",
  },
});

export default IconTextInput;
