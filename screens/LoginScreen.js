import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CirculerImage from '../components/CirculerImage'
import IconPasswordInput from '../components/IconPasswordInput'
import IconTextButton from '../components/IconTextButton'
import IconTextInput from '../components/IconTextInput'
import TextButton from '../components/TextButton'

import colors from '../utils/Colors'

const LoginScreen = () => {
  const navigation = useNavigation();

  handleLogin = () => {
    navigation.navigate('mainScreen')
  }

  // const [userName, setUserName] = useState('');
  // const [password, setPassword] = useState('');

  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     try {
  //       const isLogin = await AsyncStorage.getItem('isLogin');
  //       if (isLogin === 'true') {
  //         navigation.reset({
  //           index: 0,
  //           routes: [{ name: 'mainScreen' }],
  //         });
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   checkLoginStatus();
  // }, [navigation]);

  // const handleUserName = (text) => {
  //   setUserName(text);
  // };

  // const handlePassword = (text) => {
  //   setPassword(text);
  // };

  // const handleLogin = () => {
  //   if (userName === 'anirudh' && password === '12607') {
  //     Toast.show({
  //       type: 'success',
  //       text1: 'Success',
  //       text2: 'Login successfully',
  //     });
  //     setData();
  //     navigation.reset({
  //       index: 0,
  //       routes: [{ name: 'mainScreen' }],
  //     });
  //   } else {
  //     Toast.show({
  //       type: 'error',
  //       text1: 'Error',
  //       text2: 'Invalid username or password',
  //     });
  //   }
  // };

  // const setData = async () => {
  //   try {
  //     await AsyncStorage.setItem('isLogin', 'true');
  //     console.log('data saved');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <View style={styles.screen}>
      <Toast position='bottom' />
      <View style={styles.imageContainer}>
        <CirculerImage
          source={require('../assets/icon.png')}
          size={330}
          border={0}
        />
      </View>
      <View style={styles.userNameContainer}>
        <IconTextInput
          width='90%'
          height={45}
          color={colors.white}
          icon='at'
          borderRadious={10}
          placeholder='Username'
        // onChangeText={handleUserName}
        />
      </View>
      <View style={styles.passwordContainer}>
        <IconPasswordInput
          width='90%'
          height={45}
          color={colors.white}
          icon='lock'
          borderRadious={10}
          placeholder='Password'
        // onChangeText={handlePassword}
        />
      </View>
      <View style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </View>
      <View style={styles.LoginButtonContainer}>
        <TextButton
          color={colors.orange}
          height={52}
          width='90%'
          borderRadious={12}
          name='Login'
          textColor={colors.white}
          onPress={handleLogin}
        />
      </View>
      <View style={styles.orContainer}>
        <Text style={styles.orText}>OR</Text>
      </View>
      <View style={styles.LoginWithGoogleContainer}>
        {/* <IconTextButton
          color={colors.white}
          height={52}
          width='90%'
          borderRadious={12}
          name='Login with Google'
          textColor={colors.gray}
          icon='google'
        // onPress={ getData }
        /> */}
        <TextButton
          color={colors.white}
          height={52}
          width='90%'
          borderRadious={12}
          name='SignUp'
          textColor={colors.black}
        // onPress={handleLogin}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'linear-gradient(185deg, #127F00 3.84%, rgba(28, 190, 25, 0.81) 97.65%)',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  },
  imageContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    top: 88,
  },
  userNameContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    top: 381,
    height: 45,
  },
  passwordContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    top: 446,
    height: 45,
  },
  forgotPassword: {
    position: 'absolute',
    width: '100%',
    top: 510,
  },
  forgotPasswordText: {
    position: 'absolute',
    right: 28,
    fontWeight: '600',
    color: colors.white,
  },
  LoginButtonContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    top: 546,
  },
  orContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    top: 618,
  },
  orText: {
    color: colors.white,
    fontWeight: '600'
  },
  LoginWithGoogleContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    top: 664,
  },
})

export default LoginScreen