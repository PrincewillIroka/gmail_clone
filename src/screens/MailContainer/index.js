import React, {useContext, useState} from 'react';
import {SafeAreaView, Text, FlatList, View} from 'react-native';
import shortid from 'shortid';
import Feather from 'react-native-vector-icons/Feather';
import {Header, MailInfo, BottomTab, TransitionText} from '../../components';
import styles from './mailContainerStyle';
import {AuthContext} from '../../context';
import {navigateToNestedRoute} from '../../navigators/RootNavigation';
import {getScreenParent} from '../../utils/NavigationHelper';
import {combineData} from '../../utils/DataHelper';

export function MailContainer({navigation, route}) {
  const screenTitle = route.params?.screenTitle;
  const {state, dispatch} = useContext(AuthContext);
  const [data, setData] = useState({contentOffsetY: '', isScrollingUp: false});

  const handleDrawer = () => {
    navigation?.openDrawer();
  };

  const handleNavigation = (route, params) => {
    navigateToNestedRoute(getScreenParent(route), route, params);
  };

  const onScroll = ({contentOffset}) => {
    if (contentOffset.y > 5) {
      const existingContentOffsetY = data.contentOffsetY;
      const isScrollingUp = existingContentOffsetY > contentOffset.y;
      setData(
        combineData(data, {contentOffsetY: contentOffset.y, isScrollingUp}),
      );
    }
  };

  const getMails = () => {
    let mails,
      arr = ['Inbox', 'All mail'];
    if (arr.includes(screenTitle)) {
      mails = state?.mails;
    } else {
      mails = state?.mails?.filter(mail => mail.status === screenTitle) || [];
    }
    return mails;
  };

  const renderMailInfo = ({item}) => {
    return (
      <MailInfo
        mail={item}
        key={shortid.generate()}
        navigateToRoute={route => handleNavigation(route, item)}
      />
    );
  };

  const ComposeButton = () => {
    const {isScrollingUp} = data;
    return (
      <View
        style={[
          styles.composeButton,
          isScrollingUp
            ? styles.composeButtonRound
            : styles.composeButtonCurved,
        ]}>
        <Feather
          name="edit-2"
          size={20}
          color="#D93025"
          style={styles.menuIcon}
        />
        {!isScrollingUp ? (
          // <TransitionText animationStyle="slideInRight">
          <Text style={styles.composeText}>Compose</Text>
        ) : // </TransitionText>
        null}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header toggleDrawer={() => handleDrawer()} />
        <Text style={styles.screenTitle}>{screenTitle}</Text>
        <FlatList
          data={getMails()}
          keyExtractor={(item, index) => shortid.generate()}
          renderItem={renderMailInfo}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
          onScroll={({nativeEvent}) => {
            onScroll(nativeEvent);
          }}
          scrollEventThrottle={400}
        />
      </View>
      <ComposeButton />
      <BottomTab navigateToRoute={route => handleNavigation(route)} />
    </SafeAreaView>
  );
}
