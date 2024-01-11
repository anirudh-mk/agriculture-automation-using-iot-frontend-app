import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../utils/Colors';

const IconTextInput = ({ width, height, icon, placeholder, color, borderRadious, onChangeText }) => {

    const [divWidth, setDivWidth] = useState(0)
    
    const handleLayout = (event) => {
        const width = event.nativeEvent.layout.width
        setDivWidth(width)
    }

    return (
    <View style={{ 
        width:width, 
        height:height,
        backgroundColor:color,
        borderRadius:borderRadious,
        flexDirection:'row',
        position:'relative'
        }}
        onLayout={handleLayout}
    >
    <View style={ [styles.iconContainer, { width:height }] }>
        <MaterialCommunityIcons 
            name={ icon }
            size={ 19 }
            color={ colors.gray }
        />
    </View>
    <TextInput
        style={ [styles.textInput, { left:height, height:height, width:divWidth-(height+10)}] }
        placeholder={ placeholder }
        onChangeText={ onChangeText }
    />
    </View>
  )
}

const styles = StyleSheet.create({
    iconContainer:{
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        height:'100%',
        left:0,
    },
    textInput:{
        position:'absolute',
    },
})

export default IconTextInput