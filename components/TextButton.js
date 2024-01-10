import { Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const TextButton = ({ color, height, width, borderRadious, name, textColor, route }) => {
  
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(route);
  };


  return (
    <TouchableHighlight style={{ 
      alignItems:'center',
      justifyContent:'center',
      width:width, 
      height:height, 
      borderRadius:borderRadious, 
      backgroundColor:color,
      }}
      onPress={ handlePress }
    >
        <Text style={{
          fontSize:16,
          fontWeight:'600',
          color:textColor,
          }}
        >
          { name }
        </Text>
    </TouchableHighlight>
  )
}

export default TextButton