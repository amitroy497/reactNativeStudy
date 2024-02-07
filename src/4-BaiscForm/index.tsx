/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const Main = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [display, setDisplay] = useState<boolean>(false);

  const resetFormData = () => {
    setDisplay(false);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <View>
      <Text style={{fontSize: 30}}>Simple Form in React Native</Text>
      <TextInput
        style={styles.TextInput}
        placeholder="Enter User Name"
        onChangeText={(e: string) => setName(e)}
        value={name}
      />
      <TextInput
        style={styles.TextInput}
        placeholder="Enter User Email"
        onChangeText={(e: string) => setEmail(e)}
        value={email}
      />
      <TextInput
        style={styles.TextInput}
        placeholder="Enter User Password"
        onChangeText={(e: string) => setPassword(e)}
        value={password}
        secureTextEntry={true}
      />
      <View style={{marginBottom: 10}}>
        <Button
          color={'green'}
          title="Print Details"
          onPress={() => setDisplay(true)}
        />
      </View>

      <Button title="Clear Details" onPress={resetFormData} />
      {display && (
        <View>
          <Text style={{fontSize: 20}}>User Email is : {email}</Text>
          <Text style={{fontSize: 20}}>User Name is : {name}</Text>
          <Text style={{fontSize: 20}}>User Password is : {password}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    fontSize: 18,
    color: 'blue',
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10,
  },
});

export default Main;
