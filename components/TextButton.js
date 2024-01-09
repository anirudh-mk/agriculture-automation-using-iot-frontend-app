import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const TextButton = ({ color, height, width, border_radious, name, text_color }) => {
  
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('homeScreen');
  };


  return (
    <TouchableHighlight style={{ 
      width:width, 
      height:height, 
      borderRadius:border_radious, 
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:color,
      }}
      onPress={handlePress}
    >
        <Text style={{
          color:text_color,
          fontSize:16,
          fontWeight:'600'
          }}
        >
        {name}
        </Text>
    </TouchableHighlight>
  )
}

export default TextButton