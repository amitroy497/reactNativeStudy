/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
      <Text style={{fontSize: 31}}>Grid with Static Data</Text>
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        {Users.map(user => (
          <Text key={user.id} style={styles.item}>
            {user.name}
          </Text>
        ))}
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
