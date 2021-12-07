import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = ( { title, imageSource, score }) => {
  // console.log('props', imageSource)
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image score - {score}</Text>
    </View>

  )
}

export default ImageDetail;