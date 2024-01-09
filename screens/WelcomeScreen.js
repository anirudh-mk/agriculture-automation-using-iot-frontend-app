import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CirculerImage from '../components/CirculerImage'
import TextButton from '../components/TextButton'
import colors from '../utils/Colors';

import LinearGradient from 'react-native-linear-gradient';


const WelcomeScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <CirculerImage 
          source={require('../assets/icon.png')}
          size={330}
          border={0}
          />
      </View>
      <View style={styles.buttonContainer}>
        <TextButton
            width={240}
            height={59}
            color='#fff'
            border_radious={20}
            name='Get Started'
            text_color={colors.secondery}
          />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Farming simplified Automated</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    alignItems:'center',
    backgroundColor: 'linear-gradient(185deg, #127F00 3.84%, rgba(28, 190, 25, 0.81) 97.65%)',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    position:'relative'
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
    color:colors.white,
    fontSize:20,
    fontWeight:'600',
    top:0,
  },
})

export default WelcomeScreen