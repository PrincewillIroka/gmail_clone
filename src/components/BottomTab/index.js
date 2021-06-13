import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styles from './bottomTabStyle';
import {AuthContext} from '../../context';

export function BottomTab({navigateToRoute}) {
  const {state, dispatch} = useContext(AuthContext);
  const {mails, activeTab} = state;

  const getUnreadMails = () => {
    const unreadMails = mails?.reduce((acc, cur) => {
      if (cur?.status === 'unread') {
        acc += 1;
      }
      return acc;
    }, 0);

    return unreadMails;
  };

  const handleChangeRoute = tab => {
    dispatch({
      type: 'toggleActiveTab',
      payload: {activeTab: tab},
    });
    navigateToRoute(tab);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigateToRoute('Inbox')}
        style={styles.leftTab}>
        <View style={styles.iconWrapper}>
          {getUnreadMails() > 0 ? (
            <View style={styles.unreadMailIndicator}>
              <Text style={styles.unreadMailText}>{getUnreadMails()}+</Text>
            </View>
          ) : null}
          <SimpleLineIcons
            name="envelope"
            size={20}
            color={'Mail' === activeTab ? '#D93025' : '#808080'}
          />
        </View>
        <Text style={styles.tabText('Mail', activeTab)}>Mail</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleChangeRoute('Meet')}
        style={styles.rightTab}>
        <View style={styles.iconWrapper}>
          <MaterialIcons
            name="videocam"
            size={24}
            color={'Meet' === activeTab ? '#D93025' : '#808080'}
          />
        </View>
        <Text style={styles.tabText('Meet', activeTab)}>Meet</Text>
      </TouchableOpacity>
    </View>
  );
}
