/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const Main = () => {
  const Users = [
    {
      id: 1,
      name: 'abc',
    },
    {
      id: 2,
      name: 'def',
    },
    {
      id: 3,
      name: 'ghi',
    },
    {
      id: 10,
      name: 'xyz',
    },
  ];

  return (
    <View>
      <Text style={{fontSize: 31}}>List with Flat List Component</Text>
      <FlatList
        data={Users}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        // keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    padding: 10,
    color: '#fff',
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
});

export default Main;
