import {
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
} from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../utils/Colors";

const TextButton = ({
  name,
  textColor,
  onPress,
  icon,
  iconColor,
}) => {
  return (
    <TouchableHighlight style={styles.button}
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
  button: {
    padding: 20,
    width: '100%',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    margin: 10,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconStyle: {
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
  },
});
export default TextButton;
