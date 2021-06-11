import React, {useContext} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './headerStyle';
import {AuthContext} from '../../context';

export function Header({toggleDrawer}) {
  const {state, dispatch} = useContext(AuthContext);

  const getUserInitials = () => {
    const username = state?.username;
    return username[0];
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <MaterialIcons
          name="menu"
          size={27}
          color="gray"
          style={styles.menuIcon}
        />
      </TouchableOpacity>
      <TextInput
        placeholder="Search in mail"
        placeholderTextColor="gray"
        style={styles.searchInput}
      />
      <View style={styles.profileInitialWrapper}>
        <Text style={styles.profileInitialText}>{getUserInitials()}</Text>
      </View>
    </View>
  );
}
