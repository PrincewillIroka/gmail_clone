import React, {useContext} from 'react';
import {View, Text, FlatList} from 'react-native';
import shortid from 'shortid';
import {Header, MailInfo} from '../../components';
import styles from './mailContainerStyle';
import {AuthContext} from '../../context';

export function MailContainer({navigation, route}) {
  const screenTitle = route.params?.screenTitle;
  const {state, dispatch} = useContext(AuthContext);

  const handleDrawer = () => {
    navigation?.openDrawer();
  };

  const handleNavigation = (route, params) => {
    // navigateToNestedRoute(getScreenParent(route), route, params);
  };

  const renderMailInfo = ({item}) => {
    return (
      <MailInfo
        mail={item}
        key={shortid.generate()}
        navigateToRoute={() => handleNavigation('MailDetails', item)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header toggleDrawer={() => handleDrawer()} />
      <Text style={styles.screenTitle}>{screenTitle}</Text>
      <View style={styles.sectionContainer}>
        <FlatList
          data={state?.mails}
          keyExtractor={(item, index) => shortid.generate()}
          renderItem={renderMailInfo}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
