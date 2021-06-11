import React, {useContext} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './meetStyle';
import {BottomTab} from '../../components';
import {AuthContext} from '../../context';
import MeetIllustration from '../../assets/meet_illustration.png';
import {navigateToNestedRoute} from '../../navigators/RootNavigation';
import {getScreenParent} from '../../utils/NavigationHelper';

export function Meet() {
  const {state, dispatch} = useContext(AuthContext);

  const getUserInitials = () => {
    const username = state?.username;
    return username[0];
  };

  const handleNavigation = (route, params) => {
    navigateToNestedRoute(getScreenParent(route), route, params);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity>
            <MaterialIcons
              name="menu"
              size={27}
              color="gray"
              style={styles.menuIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Meet</Text>
          <View style={styles.profileInitialWrapper}>
            <Text style={styles.profileInitialText}>{getUserInitials()}</Text>
          </View>
        </View>
        <View style={styles.btnRow}>
          <TouchableOpacity style={[styles.btnCommon, styles.btnLeft]}>
            <Text style={styles.textLeft}>New meeting</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnCommon, styles.btnRight]}>
            <Text style={styles.textRight}>Join with a code</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bodyWrapper}>
          <Image source={MeetIllustration} style={styles.illustrationImg} />
          <Text style={styles.textOne}>Get a link you can share</Text>
          <Text style={styles.textTwo}>
            Tap New meeting to get a link you can send to people you want to
            meet with
          </Text>
          <View style={styles.dotContainer}>
            <View style={styles.dotLeft}></View>
            <View style={styles.dotRight}></View>
          </View>
        </View>
      </View>
      <BottomTab navigateToRoute={route => handleNavigation(route)} />
    </SafeAreaView>
  );
}
