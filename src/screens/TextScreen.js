import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View>
    <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Text>name - {name} </Text>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        autoCapitalize='none'
        autoCorrect={false}

      />
      {password.length < 6 ? <Text>password must be longer then 5 character</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
})

export default TextScreen;