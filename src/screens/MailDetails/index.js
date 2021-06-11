import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styles from './mailDetailsStyle';

export function MailDetails({route, navigation}) {
  const mail = route?.params;

  const handleBackButton = () => {
    navigation?.goBack();
  };

  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => handleBackButton()}>
          <MaterialIcons name="arrow-back" size={25} />
        </TouchableOpacity>
        <View style={styles.headerRightContainer}>
          <MaterialIcons name="archive" size={25} />
          <AntDesign name="delete" size={22} style={styles.rightIcon} />
          <SimpleLineIcons name="envelope" size={22} style={styles.rightIcon} />
          <MaterialIcons name="more-vert" size={25} style={styles.rightIcon} />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <Header />
      <View style={styles.container}>
        <View style={styles.mailSubjectRow}>
          <Text style={styles.mailSubjectText}>MailDetails</Text>
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
