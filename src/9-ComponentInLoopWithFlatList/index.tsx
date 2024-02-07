/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import UserData from './UserData';

const Main = () => {
  const Users = [
    {
      id: 1,
      name: 'ab',
      email: 'ab@gmail.com',
    },
    {
      id: 2,
      name: 'cd',
      email: 'cd@gmail.com',
    },
    {
      id: 3,
      name: 'ef',
      email: 'ef@gmail.com',
    },
    {
      id: 4,
      name: 'gh',
      email: 'gh@gmail.com',
    },
    {
      id: 5,
      name: 'ij',
      email: 'ij@gmail.com',
    },
    {
      id: 6,
      name: 'kl',
      email: 'kl@gmail.com',
    },
    {
      id: 7,
      name: 'mn',
      email: 'mn@gmail.com',
    },
    {
      id: 8,
      name: 'op',
      email: 'op@gmail.com',
    },
    {
      id: 9,
      name: 'qr',
      email: 'qr@gmail.com',
    },
    {
      id: 10,
      name: 'st',
      email: 'st@gmail.com',
    },
    {
      id: 11,
      name: 'uv',
      email: 'uv@gmail.com',
    },
    {
      id: 12,
      name: 'wx',
      email: 'wx@gmail.com',
    },
    {
      id: 13,
      name: 'yz',
      email: 'yz@gmail.com',
    },
  ];

  return (
    <View>
      <Text style={{fontSize: 31}}>Component in loop with FlatList</Text>
      <FlatList
        data={Users}
        renderItem={({item}) => <UserData styles={styles} item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    color: 'orange',
    flex: 1,
    margin: 2,
    textAlign: 'center',
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'orange',
    marginBottom: 10,
  },
});

export default Main;
