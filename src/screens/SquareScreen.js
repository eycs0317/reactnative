import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter'

const SquareScreen = () => {
  const [ red, setRed ] = useState(0)
  const [ green, setGreen ] = useState(0)
  const [ blue, setBlue ] = useState(0)
  console.log('red', red)
  console.log('blue', blue)
  return (
    <View>
      <ColorCounter
        onIncrease={() => setRed(red + 1)}
        onDecrease={() => setRed(red - 1)}
        color='Red'
        />
      <ColorCounter
        color='Blue'
        onIncrease={() => setBlue(blue + 1)}
        onDecrease={() => setBlue(blue - 1)} />
      <ColorCounter
        color='Green'
        onIncrease={() => setGreen(green + 1)}
        onDecrease={() => setGreen(green - 1)}
        />
      <View style={{height: 100, width: 100, backgroundColor: `rgb(${red}, ${blue}, ${green})`}}/>
    </View>

  )
}

const styles = StyleSheet.create({
})

export default SquareScreen;