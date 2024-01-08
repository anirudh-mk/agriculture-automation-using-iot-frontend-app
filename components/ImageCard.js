import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import colors from '../utils/Colors';

const ImageCard = () => {
  return (
    <View style={styles.card}>
      <Image style={styles.banner} source={require('../assets/icon.png')}/>
      <view>
        <text style={styles.headding}>Farm1</text>
        <text style={styles.main_headding}>Tomato</text>
        <text style={styles.sub_headding}>25 days left</text>
      </view>
    </View>
  )
}

export default ImageCard

const styles = StyleSheet.create({
    card:{
        width:'80%',
        height:202,
        borderRadius:10,
    },
    banner:{
        height:134,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    headding:{
        top:14,
        left:15,
        color:colors.black,
        fontSize:12,
        fontFamily:'600'
    },
    main_headding:{
        top:14,
        right:15,
        color:colors.black,
        fontSize:12,
        fontFamily:'600'
    },
    sub_headding:{
        top:14,
        right:15,
        color:colors.gray,
        fontSize:10,
        fontFamily:'400'
    }
})