import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import HeaddingText from '../components/HeaddingText'
import CirculerImage from '../components/CirculerImage'
import IconTextButton from '../components/IconTextButton'
import colors from '../utils/Colors'
import { ScrollView } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const UserScreen = () => {
  const navigation = useNavigation();

  const logout = async => {
    try{
      AsyncStorage.removeItem('isLogin')
      navigation.navigate("loginScreen")
    } catch(error){
      console.log(error)
    }
  }

  return (
    <View style={styles.screen}>
      <View style={styles.headdingContainer}>
        <HeaddingText text='User'/>
      </View>
      <View style={ styles.imageContainer }>
        <CirculerImage 
          source={ require('../assets/user.png') } 
          size={ 121 } 
          border={ 0 }
          borderColor={ colors.gray }
          />
          <Text style={styles.userName}>Anirudh MK</Text>
          <Text style={styles.userEmail}>anirudhmk123@gmail.com</Text>
      </View>
      <View style={styles.buttonContainer}>
        <IconTextButton
          color={ colors.white }
          height={ 60 }
          width='90%'
          borderRadious={ 12 }
          name='User'
          textColor={ colors.black }
          icon='at'
          textPosition='right'
          marginBottom={ 20 }
        />
        <IconTextButton
          color={ colors.white }
          height={ 60 }
          width='90%'
          borderRadious={ 12 }
          name='Contact us'
          textColor={ colors.black }
          icon='message'
          textPosition='right'
          marginBottom={ 20 }
        />
      </View>
      <View style={styles.logoutContainer}>
        <IconTextButton
          color={ colors.white }
          height={ 60 }
          width='90%'
          borderRadious={ 12 }
          name='Logout'
          textColor={ colors.tomato }
          icon='logout'
          textPosition='right'
          marginBottom={ 20 }
          iconColor={ colors.tomato }
          onPress={ logout }
        />
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    position:'relative',
    paddingBottom:100,
  },
  headdingContainer:{
    position:'absolute',
    height:100,
    width:'100%',
  },
  imageContainer:{
    position:'absolute',
    alignItems:'center',
    top:155,
    width:'100%',
  },
  userName:{
    position:'absolute',
    top:131,
    fontSize:12,
    fontWeight:'600',
  },
  userEmail:{
    position:'absolute',
    top:154,
    fontSize:10,
    fontWeight:'600',
    color:colors.gray,
  },
  buttonContainer:{
    top:375,
    alignItems:'center'
  },
  logoutContainer:{
    top:500,
    alignItems:'center'
  }
})

export default UserScreen