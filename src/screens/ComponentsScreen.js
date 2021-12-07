import React from 'react';
import  { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'My name is Stephen'
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native</Text>
      <Text style={styles.secondStyle}>{name}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  secondStyle: {
    fontSize: 20
  }
})

export default ComponentsScreen;