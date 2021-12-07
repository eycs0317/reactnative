import React, { useState } from 'react';
import { View, Button, Text, StyleSheet} from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = (e) => {

    console.log('click', e)
    setCounter(counter + 1)
  }
  return (
    <View>
      <Button
        title='Increase'
        onPress={() => {
        handleClick()
      }}/>
      <Button
        title='Decrease'
        onPress={() => {
          setCounter(counter - 1)
        }} />
      <Text>Curretn count: {counter}</Text>
    </View>
  )
}

export default CounterScreen;