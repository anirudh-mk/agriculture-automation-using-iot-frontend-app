import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CirculerImage from '../components/CirculerImage'
import TextButton from '../components/TextButton'
import colors from '../utils/Colors'
import IconTextInput from '../components/IconTextInput'

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
            <IconTextInput
                width='90%'
                height={ 45 }
                color={colors.white}
                icon='at'
                borderRadious={ 10 }
                isPassword={ false }
            />
        </View>
        <View style={ styles.passwordContainer }>
            <IconTextInput
                width='90%'
                height={ 45 }
                color={colors.white}
                icon='lock'
                borderRadious={ 10 }
                isPassword={ true }
            />
        </View>
        <View style={ styles.forgotPassword }>
            <Text style={ styles.forgotPasswordText }>Forgot password?</Text>
        </View>
        <View style={ styles.LoginButtonContainer }>
            <TextButton
                color={ colors.orange }
                height={ 52 }
                width='90%'
                borderRadious={ 12 }
                name='Login'
                textColor={ colors.white }
            />
        </View>
        <View style={ styles.orContainer }>
            <Text style={ styles.orText }>OR</Text>
        </View>
        <View style={ styles.LoginWithGoogleContainer }>
            <TextButton
                color={ colors.white }
                height={ 52 }
                width='90%'
                borderRadious={ 12 }
                name='Login'
                textColor={ colors.gray }
                />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor: 'linear-gradient(185deg, #127F00 3.84%, rgba(28, 190, 25, 0.81) 97.65%)',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
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
    }, 
    passwordContainer:{
        position:'absolute',
        alignItems:'center',
        width:'100%',
        top:446,
        height:45,
    },
    forgotPassword:{
        position:'absolute',
        width:'100%',
        top:510,
    },
    forgotPasswordText:{
        position:'absolute',
        right:28,
        fontWeight:'600',
        color:colors.white,
    },
    LoginButtonContainer:{
        position:'absolute',
        alignItems:'center',
        width:'100%',
        top:546,
    },
    orContainer:{
        position:'absolute',
        width:'100%',
        alignItems:'center',
        top:618,
    },
    orText:{
        color:colors.white,
        fontWeight:'600'
    },
    LoginWithGoogleContainer:{
        position:'absolute',
        alignItems:'center',
        width:'100%',
        top:664,
    },
})

export default LoginScreen