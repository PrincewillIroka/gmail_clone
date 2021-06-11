import React, {useContext} from 'react';
import {SafeAreaView, Text, FlatList, View} from 'react-native';
import shortid from 'shortid';
import {Header, MailInfo, BottomTab} from '../../components';
import styles from './mailContainerStyle';
import {AuthContext} from '../../context';
import {navigateToNestedRoute} from '../../navigators/RootNavigation';
import {getScreenParent} from '../../utils/navigationHelper';

export function MailContainer({navigation, route}) {
  const screenTitle = route.params?.screenTitle;
  const {state, dispatch} = useContext(AuthContext);

  const handleDrawer = () => {
    navigation?.openDrawer();
  };

  const handleNavigation = (route, params) => {
    navigateToNestedRoute(getScreenParent(route), route, params);
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header toggleDrawer={() => handleDrawer()} />
        <Text style={styles.screenTitle}>{screenTitle}</Text>
        <FlatList
          data={state?.mails}
          keyExtractor={(item, index) => shortid.generate()}
          renderItem={renderMailInfo}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
        />
      </View>
      <BottomTab navigateToRoute={route => handleNavigation(route)} />
    </SafeAreaView>
  );
}
