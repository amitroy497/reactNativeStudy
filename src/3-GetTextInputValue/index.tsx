import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const Main = () => {
  const [name, setName] = useState<string>('');
  return (
    <View>
      <Text style={[styles.sectionTitle]}>Hello React Native</Text>
      <Text style={[styles.sectionDescription]}>Name : {name}</Text>
      <TextInput
        placeholder="Please enter a name"
        value={name}
        onChangeText={text => setName(text)}
        style={[styles.textInput]}
      />
      <Button
        title="Clear input value"
        color={'#000'}
        onPress={() => setName('')}
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
  textInput: {
    fontSize: 18,
    color: 'blue',
    borderWidth: 2,
    borderColor: 'green',
  },
});

export default Main;
