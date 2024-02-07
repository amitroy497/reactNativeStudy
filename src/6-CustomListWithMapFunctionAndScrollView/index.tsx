/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const Main = () => {
  const Users = [
    {
      id: 1,
      name: 'ab',
    },
    {
      id: 2,
      name: 'cd',
    },
    {
      id: 3,
      name: 'ef',
    },
    {
      id: 4,
      name: 'gh',
    },
    {
      id: 5,
      name: 'ij',
    },
    {
      id: 6,
      name: 'kl',
    },
    {
      id: 7,
      name: 'mn',
    },
    {
      id: 8,
      name: 'op',
    },
    {
      id: 9,
      name: 'qr',
    },
    {
      id: 10,
      name: 'st',
    },
    {
      id: 11,
      name: 'uv',
    },
    {
      id: 12,
      name: 'wx',
    },
    {
      id: 13,
      name: 'yz',
    },
  ];

  return (
    <View>
      <Text style={{fontSize: 31}}>
        Custom List with Map Function and ScrollView
      </Text>
      <ScrollView style={{marginBottom: 50}}>
        {Users.map(item => (
          <Text key={item.id} style={styles.item}>
            {item.name}
          </Text>
        ))}
      </ScrollView>
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
