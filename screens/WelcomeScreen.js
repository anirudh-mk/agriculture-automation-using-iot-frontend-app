import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CirculerImage from '../components/CirculerImage'
import TextButton from '../components/TextButton'
const WelcomeScreen = () => {
  return (
    <View style={styles.screen}>
      <CirculerImage 
        source={require('../assets/icon.png')}
        size={330}
        border={0}
        top={143}
      />
      <TextButton
        width={240}
        height={59}
        top={300}
        color='#fff'
        border_radious={20}
        name='Get Started'
        text_color='#117B01'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#117B01'
  }
})

export default WelcomeScreen