import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './headerStyle';

export function Header({toggleDrawer}) {
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
      <TextInput placeholder="Search in mail" style={styles.searchInput} />
      <View style={styles.profileInitialWrapper}>
        <Text style={styles.profileInitialText}>P</Text>
      </View>
    </View>
  );
}
