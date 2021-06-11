import React, {useMemo} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './mailInfoStyle';

export function MailInfo({mail, navigateToRoute}) {
  const status = mail?.status;

  const imageUri = () => {
    return mail?.headers?.senderLogo;
  };

  const senderInitial = () => {
    const from = mail?.headers?.from;
    return from[0];
  };

  const generateColor = () => {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    if (color === 'ffffff') {
      color = generateColor();
    }
    return color;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigateToRoute('MailDetails')}>
      {imageUri() ? (
        <Image
          style={styles.senderLogo}
          source={{
            uri: imageUri(),
          }}
        />
      ) : (
        <View
          style={[
            styles.senderInitialWrapper,
            {
              backgroundColor: `#${generateColor()}`,
            },
          ]}>
          <Text style={styles.senderInitialText}>{senderInitial()}</Text>
        </View>
      )}
      <View style={styles.mailWrapper}>
        <View style={styles.mailSectionOne}>
          <Text style={[styles.mailFrom, styles.boldColor(status)]}>
            {mail?.headers?.from}
          </Text>
          <Text style={[styles.mailDate, styles.boldColor(status)]}>
            {mail?.headers?.date}
          </Text>
        </View>
        <Text
          style={[styles.mailSubject, styles.boldColor(status)]}
          numberOfLines={1}
          ellipsis="tail">
          {mail?.headers?.subject}
        </Text>
        <View style={styles.mailSectionThree}>
          <Text style={styles.mailBody} numberOfLines={1} ellipsis="tail">
            {mail?.body}
          </Text>
          <MaterialIcons
            name="star-outline"
            size={27}
            color="#808080"
            style={styles.menuIcon}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
