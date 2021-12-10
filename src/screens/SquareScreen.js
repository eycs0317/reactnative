import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {
  console.log('action', action)
  switch(action.type) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0 ? state : {...state, red: state.red + action.amount}
    case 'green':
      return state.green + action.amount > 255 || state.green + action.amount < 0 ? state : {...state, green: state.green + action.amount}
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0 ? state : {...state, blue: state.blue + action.amount}
    default:
      return state;
  }
}

const SquareScreen = () => {
  const [ state, dispatch ] = useReducer(reducer, {red: 0, green: 0, blue: 0})
  console.log('state---', state)
  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({type: 'red', amount: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'red', amount: -1 * COLOR_INCREMENT})}
        color='Red'
        />
      <ColorCounter
        color='Green'
        onIncrease={() => dispatch({type: 'green', amount: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'green', amount: -1 * COLOR_INCREMENT})}
        />
      <ColorCounter
        color='Blue'
        onIncrease={() => dispatch({type: 'blue', amount: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'blue', amount: -1 * COLOR_INCREMENT})}
        />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}}/>
    </View>

  )
}

const styles = StyleSheet.create({
})

export default SquareScreen;