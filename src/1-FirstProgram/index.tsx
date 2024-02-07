import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Main = () => {
  return (
    <View>
      <Text style={[styles.sectionTitle]}>Hello React Native</Text>
      <Text style={[styles.sectionDescription]}>Start ...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 30,
    fontWeight: '900',
  },
  sectionDescription: {
    fontSize: 25,
    fontWeight: '600',
  },
});

export default Main;
