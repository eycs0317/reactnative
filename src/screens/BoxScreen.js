import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.boxOneStyle}>Box1</Text>
      <Text style={styles.boxTwoStyle}>Box2</Text>
      <Text style={styles.boxThreeStyle}>Box3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    height:200,
    flexDirection: "row",
    justifyContent: 'space-between'

  },
  boxOneStyle: {
    backgroundColor: 'red',
    height: 100,
    width: 100
  },
  boxTwoStyle: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
    // alignSelf: 'flex-end'
    marginTop: 50
  },
  boxThreeStyle: {
    backgroundColor: 'purple',
    height: 100,
    width: 100
  }
})

export default BoxScreen;