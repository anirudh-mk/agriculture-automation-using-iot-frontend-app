import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import colors from '../utils/Colors'


const DetailsCard = ({ vagiatableName }) => {

    return (
        <TouchableHighlight style={styles.cardContainer}>
            <View>
                <Text style={styles.heddingText}>{vagiatableName}</Text>
                <View style={styles.subHeaddingContainer}>
                    <MaterialCommunityIcons
                        name='clock'
                        color={colors.primary}
                        size={16}
                    />
                    <Text style={styles.subHeadding}>20 day left</Text>
                </View>

                <View style={styles.grapContainer}>
                    <View style={styles.circle}>
                        <View style={styles.innerCircle}>
                            <Text style={styles.dataHeadding}>N</Text>
                            <Text style={styles.dataText}>20%</Text>
                        </View>
                    </View>
                    <View style={styles.circle}>
                        <View style={styles.innerCircle}>
                            <Text style={styles.dataHeadding}>P</Text>
                            <Text style={styles.dataText}>65%</Text>
                        </View>
                    </View>
                    <View style={styles.circle}>
                        <View style={styles.innerCircle}>
                            <Text style={styles.dataHeadding}>K</Text>
                            <Text style={styles.dataText}>52%</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        padding: 16,
        borderWidth: 1,
        borderColor: 'rgba(10, 109, 247, 0.19)',
        backgroundColor: 'rgba(250, 250, 250, 0.00)',
        shadowColor: 'rgba(38, 110, 211, 0.24)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 10,
        borderRadius: 10,
        width: '100%'
    },
    heddingText: {
        fontSize: 18,
        fontWeight: '600',
    },
    subHeaddingContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 20
    },
    subHeadding: {
        paddingLeft: 5,
    },
    grapContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    circle: {
        width: 80,
        height: 80,
        backgroundColor: '#076DFC',
        borderRadius: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerCircle: {
        width: 65,
        backgroundColor: 'white',
        height: 65,
        borderRadius: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dataHeadding: {
        fontSize: 18,
        fontWeight: '600'
    },
    dataText: {
        fontSize: 14,
        fontWeight: '500'
    }
})

export default DetailsCard