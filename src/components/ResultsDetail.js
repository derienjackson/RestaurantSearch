import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating}
        <Entypo name="star" style={styles.iconStyle} />, {result.review_count}{' '}
        Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
  iconStyle: {
    fontSize: 13,
    alignSelf: 'center',
    marginHorizontal: 0,
  },
});

export default ResultsDetail;
