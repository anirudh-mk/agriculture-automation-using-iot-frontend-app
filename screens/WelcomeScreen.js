import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import CirculerImage from '../components/CirculerImage'
import TextButton from '../components/TextButton'

import colors from '../utils/Colors';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {

  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const handleWelcome = async () => {
      setLoading(true)
      try{
        const isFirstTime = await AsyncStorage.getItem('isFirstTime')
        const isLogin = await AsyncStorage.getItem('isLogin')
        
        if (isLogin === 'true'){
          navigation.navigate('mainScreen')
        }
        else if (isFirstTime === 'true'){
          navigation.navigate('loginScreen')
        }
      } catch(error){
        console.log(error)
      }finally{
        setLoading(false)
      }
    }
    handleWelcome();
  },[navigation])

  const handleNavigation = async () => {
    try{
      AsyncStorage.setItem('isFirstTime', 'true')
      navigation.navigate('loginScreen')
    } catch(error){
      console.log(error);
    }
  }

  if(loading){
    return(
      <Image source={require('../assets/splash.png')}></Image>
    )
  }

  return (
    <View style={ styles.screen }>
      <View style={ styles.imageContainer }>
        <CirculerImage 
          source={ require('../assets/icon.png') }
          size={ 330 }
          border={ 0 }
          />
      </View>
      <View style={ styles.buttonContainer }>
        <TextButton
            width={ 300 }
            height={ 59 }
            color='#fff'
            borderRadious={ 20 }
            name='Get Started'
            textColor={ colors.secondery }
            onPress={ handleNavigation }
          />
      </View>
      <View style={ styles.textContainer }>
        <Text style={ styles.text }>Farming simplified Automated</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    position:'relative',
    alignItems:'center',
    backgroundColor: 'linear-gradient(185deg, #127F00 3.84%, rgba(28, 190, 25, 0.81) 97.65%)',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  },
  imageContainer:{
    position:'absolute',
    top:88
  },
  buttonContainer:{
    position:'absolute',
    top:609
  },
  textContainer:{
    position:'absolute',
    top:686
  },
  text:{
    fontSize:20,
    fontWeight:'600',
    color:colors.white,
  },
})

export default WelcomeScreen