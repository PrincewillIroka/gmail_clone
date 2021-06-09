import React from 'react';
import {View, Text} from 'react-native';
import {Header} from '../../components';
import styles from './inboxStyle';

export function Inbox({navigation}) {
  const handleDrawer = () => {
    navigation?.openDrawer();
  };

  return (
    <View style={styles.container}>
      <Header toggleDrawer={() => handleDrawer()} />
      <Text>Inbox</Text>
    </View>
  );
}
