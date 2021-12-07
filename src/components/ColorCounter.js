import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native'

const ColorCounter = ( { title, imageSource, score }) => {
  // console.log('props', imageSource)
  return (
    <View>

      <Button title='Increase Red'/>
      <Button title='Decrease Red'/>
    </View>

  )
}

export default ColorCounter;