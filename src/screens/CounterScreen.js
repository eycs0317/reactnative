import React, { useState, useReducer } from 'react';
import { View, Button, Text, StyleSheet} from 'react-native';


const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + action.payload}
    case 'decrement':
      return {count: state.count - action.payload}

    default:
      return state;
  }


}
const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer,{count: 0});
  // const [counter, setCounter] = useState(0)

  // const handleClick = (e) => {

  //   console.log('click', e)
  //   setCounter(counter + 1)
  // }
  return (
    <View>
      <Button
        title='Increase'
        // onPress={() => {
        //   setCounter(counter + 1)
        // }}
        onPress={() => dispatch({type: 'increment', payload: 1})}
      />
      <Button
        title='Decrease'
        // onPress={() => {
        //   setCounter(counter - 1)
        // }}
        onPress={() => dispatch({type: 'decrement', payload: 1})}
      />

      <Text>Curretn count: {state.count}</Text>
    </View>
  )
}

export default CounterScreen;