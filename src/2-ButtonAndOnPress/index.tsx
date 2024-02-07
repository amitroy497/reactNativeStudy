import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Main = () => {
  const pressMe = () => {
    console.warn('Function called');
  };
  const pressMeToo = (val: string) => {
    console.warn(val);
  };
  return (
    <View>
      <Text style={[styles.sectionTitle]}>Hello React Native</Text>
      <Text style={[styles.sectionDescription]}>Start ...</Text>
      <Button title="Press here" color={'green'} onPress={pressMe} />
      <Button
        title="Please press me too"
        color={'red'}
        onPress={() => console.warn('Another Function Called')}
      />
      <Button
        title="Press"
        color={'#000'}
        onPress={() => pressMeToo('Hello Amit')}
      />
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
