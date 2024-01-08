import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import colors from '../utils/Colors';

const ImageCard = () => {
  return (
    <View style={styles.card}>
      <Image style={styles.banner} source={require('../assets/icon.png')}/>
      <View style={styles.bottom_container}>
        <Text style={styles.headding}>Farm1</Text>
        <Text style={styles.main_headding}>Tomato</Text>
        <Text style={styles.sub_headding}>25 days left</Text>
      </View>
    </View>
  )
}

export default ImageCard

const styles = StyleSheet.create({
    card:{
        width:'95%',
        height:202,
        borderRadius:10,
        position:'relative',
        borderWidth:1,
        borderColor:colors.black
    },
    banner:{
        height:134,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        width:'100%',
        position:'absolute'
    },
    bottom_container:{
      top:134,
      width:'100%',
      position:'absolute'
    },
    headding:{
        top:14,
        left:15,
        color:colors.black,
        fontSize:12,
        fontFamily:'600',
        position:'absolute'
    },
    main_headding:{
        top:14,
        right:15,
        color:colors.black,
        fontSize:12,
        fontFamily:'600',
        position:'absolute'
    },
    sub_headding:{
        top:30,
        right:15,
        color:colors.gray,
        fontSize:10,
        fontFamily:'400',
        position:'absolute'
    }
})