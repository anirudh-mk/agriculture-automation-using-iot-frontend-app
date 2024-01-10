import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../utils/Colors';

const IconTextInput = ({ width, height, icon, placeholder, color, borderRadious }) => {

    const [divWidth, setDivWidth] = useState(0)
    const [eyeIcon, setEyeIcon] = useState(false)

    const handleLayout = (event) => {
        const width = event.nativeEvent.layout.width
        setDivWidth(width)
    }

    const handlePasswordShow = () => {
        setEyeIcon(!eyeIcon)
    }

    return (
    <View style={{ 
        width:width, 
        height:height,
        backgroundColor:color,
        borderRadius:borderRadious,
        flexDirection:'row'
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
            style={ [styles.textInput, { left:height, height:height, width:divWidth-(height*2)}] }
            placeholder={ placeholder }
            secureTextEntry={ eyeIcon?false:true }
        />
        <View style={ [styles.passwordContainer, { width:height }] }>
            <MaterialCommunityIcons 
                name={eyeIcon?'eye-outline':'eye-off-outline'}
                size={ 19 }
                color={ colors.gray }
                onPress={ handlePasswordShow }
            />
        </View> 
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
    passwordContainer:{
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        height:'100%',
        right:0,
    },
    textInput:{
        position:'absolute',
    },
})

export default IconTextInput