import { Text, TouchableHighlight, StyleSheet, View } from 'react-native'
import React from 'react'

const TextCard = ({ mainHeadding, subHeadding, onPress, textColor }) => {

  return (
    <TouchableHighlight style={styles.button}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <Text
          style={[
            styles.text,
            {
              color: textColor,
            },
          ]}
        >
          {subHeadding}
        </Text>
        <Text
          style={[
            styles.text,
            {
              color: textColor,
            },
          ]}
        >
          {mainHeadding}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    margin: 10,
    padding: 20
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
  },
});
export default TextCard