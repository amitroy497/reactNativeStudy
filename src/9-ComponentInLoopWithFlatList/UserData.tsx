import React, {FC} from 'react';
import {Text, View} from 'react-native';

interface UserDataProps {
  styles: any;
  item: any;
}
const UserData: FC<UserDataProps> = ({styles, item}) => {
  return (
    <View style={styles.box}>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
  );
};

export default UserData;
