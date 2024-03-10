import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../utils/Colors';

const ImageCard = ({ farm, vegetable, daysLeft, banner, onPress }) => {

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={onPress}
    >
      <Image style={styles.bannerImage} source={banner} />
      <View style={styles.bottomContainer}>
        <Text style={styles.headding}>{farm}</Text>
        <View style={styles.subHeaddingContainer}>
          <Text style={styles.mainHeadding}>{vegetable}</Text>
          <Text style={styles.subHeadding}>{daysLeft}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ImageCard

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(10, 109, 247, 0.19)',
    backgroundColor: 'rgba(250, 250, 250, 0.00)',
    shadowColor: 'rgba(38, 110, 211, 0.24)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
    marginVertical: 10
  },
  bannerImage: {
    height: 134,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    width: '100%',
    padding: 14
  },
  headding: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
  },
  subHeaddingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  mainHeadding: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
  },
  subHeadding: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.gray,
  }
})