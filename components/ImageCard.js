import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../utils/Colors';

const ImageCard = ({ farm, vegitable, daysLeft, banner}) => {
  return (
      <TouchableOpacity 
        style={ styles.cardContainer } 
        onPress={ () => console.log('HELLOS') }
      >
        <Image style={ styles.bannerImage } source={ banner }/>
        <View style={ styles.bottomContainer }>
          <Text style={ styles.headding }>{ farm }</Text>
          <Text style={ styles.mainHeadding }>{ vegitable }</Text>
          <Text style={ styles.subHeadding }>{ daysLeft }</Text>
        </View>
      </TouchableOpacity>
  )
}

export default ImageCard

const styles = StyleSheet.create({
    cardContainer:{
        width:'95%',
        height:202,
        borderRadius:10,
        position:'relative',
        borderWidth: 1,
        borderColor: 'rgba(10, 109, 247, 0.19)',
        backgroundColor: 'rgba(250, 250, 250, 0.00)',
        shadowColor: 'rgba(38, 110, 211, 0.24)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 10,
        marginBottom:20
    },
    bannerImage:{
        position:'absolute',
        height:134,
        width:'100%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    bottomContainer:{
      position:'absolute',
      top:134,
      width:'100%',
    },
    headding:{
        position:'absolute',
        top:14,
        left:15,
        fontSize:12,
        fontWeight:'600',
        color:colors.black,
    },
    mainHeadding:{
        position:'absolute',
        top:14,
        right:15,
        fontSize:12,
        fontWeight:'600',
        color:colors.black,
    },
    subHeadding:{
        position:'absolute',
        top:30,
        right:15,
        fontSize:10,
        fontWeight:'400',
        color:colors.gray,
    }
})