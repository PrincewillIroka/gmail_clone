import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './composeStyle';

export function Compose({navigation}) {
  const handleBackButton = () => {
    navigation?.goBack();
  };

  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerLeftContainer}>
          <TouchableOpacity onPress={() => handleBackButton()}>
            <MaterialIcons name="arrow-back" size={25} color="#323232" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Compose</Text>
        </View>
        <View style={styles.headerRightContainer}>
          <MaterialCommunityIcons
            name="attachment"
            size={25}
            style={styles.rightIcon}
            color="#323232"
          />
          <MaterialIcons
            name="send"
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
        <View style={styles.contentRow}>
          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>From</Text>
            <Text style={styles.infoValue}>test@gmail.com</Text>
          </View>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={25}
            style={styles.rightIcon}
            color="gray"
          />
        </View>
        <View style={styles.contentRow}>
          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>To</Text>
            <TextInput style={styles.infoValue} />
          </View>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={25}
            style={styles.rightIcon}
            color="gray"
          />
        </View>
        <View style={styles.contentRow}>
          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>Subject</Text>
            <TextInput style={styles.infoValue} />
          </View>
        </View>
          <TextInput
            placeholder="Compose email"
            placeholderTextColor='#595959'
            style={styles.composeTextInput}
            multiline={true}
            textAlignVertical="top"
          />
      </View>
    </SafeAreaView>
  );
}
