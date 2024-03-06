import React from "react";
import { Image } from "react-native";

const CirculerImage = ({ source, size }) => {
  return (
    <Image
      source={source}
      style={{
        width: size,
        height: size,
      }}
    />
  );
};

export default CirculerImage;
