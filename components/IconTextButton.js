import { Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../utils/Colors';
const TextButton = ({ color, height, width, borderRadious, name, textColor, onPress, icon, textPosition, marginBottom, iconColor }) => {
  
  return (
    <TouchableHighlight style={{ 
      justifyContent:'center',
      width:width, 
      height:height, 
      borderRadius:borderRadious, 
      backgroundColor:color,
      position:'relative',
      marginBottom:marginBottom?marginBottom:0,
      }}
      onPress={ onPress }
    >
        <View style={{position:'absolute', width:'100%', flexDirection:'row'}}>
            <MaterialCommunityIcons
                name={ icon }
                size={ 20 }
                style={{left:12, position:'absolute'}}
                color={ iconColor?iconColor:colors.black }
            />
            <Text style={{
            fontSize:16,
            fontWeight:'600',
            color:textColor,
            textAlign:textPosition?textPosition:'center',
            paddingRight:20,
            paddingLeft:20,
            width:'100%',
            }}
            >
            { name }
            </Text>
        </View>
    </TouchableHighlight>
  )
}

export default TextButton