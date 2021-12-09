import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native'

const ColorCounter = ( { color, onIncrease, onDecrease }) => {
  // console.log('props', imageSource)
  return (
    <View>
      <Text>{color}</Text>
      <Button
        title={`Increase ${color}`}
        onPress={() => onIncrease()}
        />
      <Button
        title={`Decrease ${color}`}
        onPress={() => onDecrease()}
        />
    </View>

  )
}

export default ColorCounter;