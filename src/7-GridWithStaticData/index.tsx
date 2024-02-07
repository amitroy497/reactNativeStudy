/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Main = () => {
  return (
    <View>
      <Text style={{fontSize: 31}}>Grid with Static Data</Text>
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        <Text style={styles.item}>Amit</Text>
        <Text style={styles.item}>Amit</Text>
        <Text style={styles.item}>Amit</Text>
        <Text style={styles.item}>Amit</Text>
        <Text style={styles.item}>Amit</Text>
        <Text style={styles.item}>Amit</Text>
        <Text style={styles.item}>Amit</Text>
        <Text style={styles.item}>Amit</Text>
        <Text style={styles.item}>Amit</Text>
        <Text style={styles.item}>Amit</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    backgroundColor: 'blue',
    color: '#fff',
    margin: 5,
    padding: 5,
    width: 120,
    height: 120,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default Main;
