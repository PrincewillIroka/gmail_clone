import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import WebView from 'react-native-webview';
import styles from './mailDetailsStyle';

export function MailDetails({route, navigation}) {
  const {mail, screenTitle} = route?.params;

  const handleBackButton = () => {
    navigation?.goBack();
  };

  const imageUri = () => {
    return mail?.headers?.senderLogo;
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
        <View style={styles.mailSubjectSection}>
          <View style={styles.mailSubjectRow}>
            <Text style={styles.mailSubjectText}>{mail?.headers?.subject}</Text>
            <Text style={styles.mailTag}>{screenTitle}</Text>
          </View>
          <MaterialIcons
            name="star-outline"
            size={27}
            color="#808080"
            style={styles.menuIcon}
          />
        </View>
        <View style={styles.mailInfoSection}>
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
          <View style={styles.fromRow}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.fromText}>
              {mail?.headers?.from}
            </Text>
            <View style={styles.toRow}>
              <Text style={styles.toText}>to me</Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={25}
                color="#323232"
              />
            </View>
          </View>
          <Text style={styles.dateText}>{mail?.headers?.date}</Text>
          <View style={styles.rightMailInfo}>
            <AntDesign name="back" size={25} color="#323232" />
            <MaterialIcons
              name="more-vert"
              size={25}
              style={styles.rightIcon}
              color="#323232"
            />
          </View>
        </View>
        <View
          style={{
            height: '100%',
            width: '100%',
          }}>
          {/* Load dummy content here */}
          <WebView
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{
              uri: 'https://medium.com/',
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
