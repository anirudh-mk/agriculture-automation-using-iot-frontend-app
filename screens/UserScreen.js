import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import HeaddingText from '../components/HeaddingText'
import CirculerImage from '../components/CirculerImage'

import colors from '../utils/Colors'
import { ScrollView } from 'react-native-gesture-handler'

const UserScreen = () => {
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
      <View style={styles.scrollingMenu}>
        <ScrollView style={{ width:'100%' }} contentContainerStyle={{ alignItems:'center' }}>
          <CirculerImage 
            source={ require('../assets/user.png') } 
            size={ 121 } 
            border={ 0 }
            borderColor={ colors.gray }
            />
            <CirculerImage 
            source={ require('../assets/user.png') } 
            size={ 121 } 
            border={ 0 }
            borderColor={ colors.gray }
            />
            <CirculerImage 
            source={ require('../assets/user.png') } 
            size={ 121 } 
            border={ 0 }
            borderColor={ colors.gray }
            />
            <CirculerImage 
            source={ require('../assets/user.png') } 
            size={ 121 } 
            border={ 0 }
            borderColor={ colors.gray }
            />
            <CirculerImage 
            source={ require('../assets/user.png') } 
            size={ 121 } 
            border={ 0 }
            borderColor={ colors.gray }
            />
            <CirculerImage 
            source={ require('../assets/user.png') } 
            size={ 121 } 
            border={ 0 }
            borderColor={ colors.gray }
            />
            <CirculerImage 
            source={ require('../assets/user.png') } 
            size={ 121 } 
            border={ 0 }
            borderColor={ colors.gray }
            />
            <CirculerImage 
            source={ require('../assets/user.png') } 
            size={ 121 } 
            border={ 0 }
            borderColor={ colors.gray }
            />
        </ScrollView>
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
  scrollingMenu:{
    top:375,
  }
})

export default UserScreen