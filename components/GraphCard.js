import { View, Text, StyleSheet, TouchableHighlight, Button, TouchableOpacity, TouchableOpacityBase } from 'react-native'
import React, { useState } from 'react'

import { Dimensions } from 'react-native'
import {
  LineChart,
} from "react-native-chart-kit";

const DetailsCard = ({ vagiatableName, navigation }) => {

  const [active, setActive] = useState('npk')


  const screenWidth = Dimensions.get("window").width;
  const chartConfig = {
    backgroundGradientFrom: 'white',
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(43,105,198, ${opacity})`,
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [90, 35, 34, 80, 99, 43, 54],
        color: (opacity = 1) => `rgba(43, 105, 198, ${opacity})`,
        strokeWidth: 2
      },
      {
        data: [46, 67, 78, 43, 87, 43, 86],
        color: (opacity = 1) => `rgba(108, 82, 184, ${opacity})`,
        strokeWidth: 2
      }
    ]
  };

  return (
    <TouchableHighlight style={[styles.card, navigation ? { paddingTop: 0 } : { paddingTop: 20 }]}>
      <View>
        {navigation && <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.button} onPress={() => setActive('npk')}>
            <View>
              <View style={[styles.menuActiveItem, active === 'npk' ? { backgroundColor: '#076DFC' } : { backgroundColor: 'white' }]} />
              <Text style={styles.buttonText}>NPK</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setActive('n')}>
            <View>
              <View style={[styles.menuActiveItem, active === 'n' ? { backgroundColor: '#076DFC' } : { backgroundColor: 'white' }]} />
              <Text style={styles.buttonText}>N</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setActive('p')}>
            <View>
              <View style={[styles.menuActiveItem, active === 'p' ? { backgroundColor: '#076DFC' } : { backgroundColor: 'white' }]} />
              <Text style={styles.buttonText}>P</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setActive('k')}>
            <View>
              <View style={[styles.menuActiveItem, active === 'k' ? { backgroundColor: '#076DFC' } : { backgroundColor: 'white' }]} />
              <Text style={styles.buttonText}>K</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setActive('t')}>
            <View>
              <View style={[styles.menuActiveItem, active === 't' ? { backgroundColor: '#076DFC' } : { backgroundColor: 'white' }]} />
              <Text style={styles.buttonText}>T</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setActive('w')}>
            <View>
              <View style={[styles.menuActiveItem, active === 'w' ? { backgroundColor: '#076DFC' } : { backgroundColor: 'white' }]} />
              <Text style={styles.buttonText}>W</Text>
            </View>
          </TouchableOpacity>
        </View>
        }

        <LineChart
          data={data}
          width={screenWidth}
          height={200}
          verticalLabelRotation={0}
          chartConfig={chartConfig}
          bezier
          withDots={false}
          withInnerLines={false}
          withOuterLines={false}
          fromZero={true}
          formatYLabel={(label) => label | 0}
        />
      </View>
    </TouchableHighlight >
  )
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(10, 109, 247, 0.19)',
    backgroundColor: 'rgba(250, 250, 250, 0.00)',
    shadowColor: 'rgba(38, 110, 211, 0.24)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 10,
    paddingBottom: 20
  },
  menuContainer: {
    paddingRight: 20,
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10
  },
  menuActiveItem: {
    height: 4,
    width: '100%',
  }
}
)

export default DetailsCard