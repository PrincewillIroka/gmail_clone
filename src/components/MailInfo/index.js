import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './mailInfoStyle';

export function MailInfo({mail, navigateToRoute}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.senderLogo}
        source={{
          uri: mail?.headers?.senderLogo,
        }}
      />
      <View style={styles.mailWrapper}>
        <Text style={styles.mailSubject}>MailInfo</Text>
        <Text style={styles.mailSubject}>MailInfo</Text>
        <Text style={styles.mailSubject}>MailInfo</Text>
      </View>
    </View>
  );
}
