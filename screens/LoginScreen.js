import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CirculerImage from '../components/CirculerImage'

const LoginScreen = () => {
  return (
    <View style={ styles.screen }>
        <View style={ styles.imageContainer }>
            <CirculerImage
                source={ require('../assets/icon.png') }
                size={ 330 }
                border={ 0 }

            />
        </View>
        <View style={ styles.userNameContainer }>

        </View>
        <View style={ styles.passwordContainer }>

        </View>
        <View style={ styles.forgotPassword }>
            <Text style={ styles.forgotPasswordText }>Forgot password?</Text>
        </View>
        <View style={ styles.LoginButtonContainer }>

        </View>
        <View style={ styles.orContainer }>
            <Text style={ styles.orText }>OR</Text>
        </View>
        <View style={ styles.LoginWithGoogleContainer }>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
    imageContainer:{
        position:'absolute',
        alignItems:'center',
        width:'100%',
        top:88,
    },
    userNameContainer:{
        position:'absolute',
        alignItems:'center',
        width:'100%',
        top:381,
        height:45,
        backgroundColor:'gray'
    }, 
    passwordContainer:{
        position:'absolute',
        alignItems:'center',
        width:'100%',
        top:446,
        height:45,
        backgroundColor:'gray'
    },
    forgotPassword:{
        position:'absolute',
        width:'100%',
        top:510,
    },
    forgotPasswordText:{

    },
    LoginButtonContainer:{
        position:'absolute',
        alignItems:'center',
        width:'100%',
        top:546,
        height:52,
        backgroundColor:'tomato'
    },
    orContainer:{
        position:'absolute',
        width:'100%',
        alignItems:'center',
        top:618,
    },
    orText:{

    },
    LoginWithGoogleContainer:{
        position:'absolute',
        alignItems:'center',
        width:'100%',
        top:664,
        height:52,
        backgroundColor:'tomato'
    },
})

export default LoginScreen