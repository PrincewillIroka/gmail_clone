import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './mailDetailsStyle';

export function MailDetails({route, navigation}) {
  const {mail, screenTitle} = route?.params;

  const handleBackButton = () => {
    navigation?.goBack();
  };

  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => handleBackButton()}>
          <MaterialIcons name="arrow-back" size={25} color="#323232" />
        </TouchableOpacity>
        <View style={styles.headerRightContainer}>
          <MaterialCommunityIcons
            name="archive-arrow-down-outline"
            size={25}
            color="#323232"
          />
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={25}
            style={styles.rightIcon}
            color="#323232"
          />
          <FontAwesome
            name="envelope-o"
            size={22}
            style={styles.rightIcon}
            color="#323232"
          />
          <MaterialIcons
            name="more-vert"
            size={25}
            style={styles.rightIcon}
            color="#323232"
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.bodyWrapper}>
        <View style={styles.mailSubjectRow}>
          <Text style={styles.mailSubjectText}>{mail?.headers?.subject}</Text>
          <MaterialIcons
            name="star-outline"
            size={27}
            color="#808080"
            style={styles.menuIcon}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
