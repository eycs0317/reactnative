import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>Homeeeee</Text>

      <Button
        title='click to ComponentsScreen'
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title='click to ListScreen'
        onPress={() => navigation.navigate('List')}
      />

      <Button
        title='To Image component'
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title='To counter page'
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title='To Color page'
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title='To Square page'
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title='To Text page'
        onPress={() => navigation.navigate('Text')}
      />
      <Button
        title='To BoxScreen page'
        onPress={() => navigation.navigate('Box')}
      />
    </View>

  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;


