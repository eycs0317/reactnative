import React from 'react'
import { View, Text, StyleSheet, FlatList, Button , Alert} from 'react-native'

const ListScreen = () => {
  const friends = [
    {name: 'Eddie', age: 12},
    {name: 'Maria', age: 13},
    {name: 'Johnny', age: 12},
    {name: 'Sam', age: 12},


  ]
  return (
    <View>
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
      }}>

    </FlatList>
    <Button
      onPress={() => Alert.alert('button pressed')}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    // marginVertical: 50,
    fontSize:30

  }
})

export default ListScreen;

