import { Text, TouchableHighlight, Dimensions } from "react-native";
import React from "react";

const TextButton = ({
  color,
  height,
  width,
  borderRadious,
  name,
  textColor,
  onPress,
}) => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <TouchableHighlight
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: screenWidth - 40,
        height: height,
        borderRadius: borderRadious,
        backgroundColor: color,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          color: textColor,
        }}
      >
        {name}
      </Text>
    </TouchableHighlight>
  );
};

export default TextButton;
