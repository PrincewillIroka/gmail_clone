import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import shortid from 'shortid';
import {MailContainer, MailDetails, Meet, Compose} from '../screens';
import {combineData} from '../utils/DataHelper';
import {AuthContext} from '../context';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const {state, dispatch} = useContext(AuthContext);
  const [data, setData] = useState({activeNavTab: 'Inbox'});
  const tabs = [
    'Inbox',
    'Unread',
    'Starred',
    'Snoozed',
    'Important',
    'Sent',
    'Scheduled',
    'Outbox',
    'Drafts',
    'All mail',
    'Spam',
    'Trash',
  ];

  const getColor = title => {
    let color;
    if (title === data?.activeNavTab) {
      color = '#C8342F';
    } else {
      color = '#000';
    }
    return color;
  };

  const isActiveTab = title => {
    let value;
    if (title === data?.activeNavTab) {
      value = true;
    }
    return value;
  };

  const handleNavigation = (route, props) => {
    setData(combineData(data, {activeNavTab: route}));
    props.navigation.navigate(route);
  };

  const getMails = tab => {
    let mails,
      arr = ['Inbox', 'All mail'];
    if (arr.includes(tab)) {
      mails = state?.mails;
    } else {
      mails =
        state?.mails?.filter(mail => mail.status === tab?.toLowerCase()) || [];
    }
    return mails?.length;
  };

  const MenuItemIcon = ({tab}) => {
    let icon;
    if (tab === 'Inbox') {
      icon = <MaterialIcons name="inbox" size={24} color={getColor(tab)} />;
    } else if (tab === 'Unread') {
      icon = (
        <SimpleLineIcons name="envelope-open" size={20} color={getColor(tab)} />
      );
    } else if (tab === 'Starred') {
      icon = (
        <MaterialIcons name="star-outline" size={25} color={getColor(tab)} />
      );
    } else if (tab === 'Snoozed') {
      icon = <Fontisto name="clock" size={20} color={getColor(tab)} />;
    } else if (tab === 'Important') {
      icon = (
        <MaterialIcons
          name="label-important-outline"
          size={25}
          color={getColor(tab)}
        />
      );
    } else if (tab === 'Sent') {
      icon = <MaterialIcons name="send" size={23} color={getColor(tab)} />;
    } else if (tab === 'Scheduled') {
      icon = (
        <MaterialIcons name="schedule-send" size={23} color={getColor(tab)} />
      );
    } else if (tab === 'Outbox') {
      icon = (
        <MaterialCommunityIcons
          name="email-send-outline"
          size={22}
          color={getColor(tab)}
        />
      );
    } else if (tab === 'Drafts') {
      icon = (
        <MaterialCommunityIcons
          name="file-outline"
          size={23}
          color={getColor(tab)}
        />
      );
    } else if (tab === 'All mail') {
      icon = (
        <MaterialCommunityIcons
          name="email-multiple-outline"
          size={20}
          color={getColor(tab)}
        />
      );
    } else if (tab === 'Spam') {
      icon = (
        <MaterialIcons name="error-outline" size={24} color={getColor(tab)} />
      );
    } else if (tab === 'Trash') {
      icon = (
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={25}
          color={getColor(tab)}
        />
      );
    }

    return icon;
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.menuContainer}>
        <View style={styles.menuTitleContainer}>
          <Text style={styles.menuTitleText}>Gmail</Text>
        </View>
        <View style={styles.menuItemsContainer}>
          {tabs?.map((tab, index) => (
            <View key={shortid.generate()}>
              {index === 2 ? (
                <Text style={styles.allLabelsText}>ALL LABELS</Text>
              ) : null}
              <TouchableOpacity
                style={[
                  styles.menuItemWrapper,
                  isActiveTab(tab) && styles.activeMenuItemWrapper,
                ]}
                onPress={() => handleNavigation(tab, props)}>
                <View style={styles.menuIcon}>
                  <MenuItemIcon tab={tab} />
                </View>
                <Text
                  style={styles.menuText}
                  style={[
                    styles.menuText,
                    isActiveTab(tab) && styles.activeMenuText,
                  ]}>
                  {tab}
                </Text>
                {getMails(tab) > 0 ? (
                  <View style={styles.menuCount}>
                    <Text style={[isActiveTab(tab) && styles.activeMenuText]}>
                      {getMails(tab)}
                    </Text>
                    <MaterialCommunityIcons
                      name="plus"
                      size={13}
                      color={getColor(tab)}
                    />
                  </View>
                ) : null}
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Inbox"
        component={MailContainer}
        initialParams={{screenTitle: 'Inbox'}}
      />
      <Drawer.Screen
        name="Unread"
        component={MailContainer}
        initialParams={{screenTitle: 'Unread'}}
      />
      <Drawer.Screen
        name="Starred"
        component={MailContainer}
        initialParams={{screenTitle: 'Starred'}}
      />
      <Drawer.Screen
        name="Snoozed"
        component={MailContainer}
        initialParams={{screenTitle: 'Snoozed'}}
      />
      <Drawer.Screen
        name="Important"
        component={MailContainer}
        initialParams={{screenTitle: 'Important'}}
      />
      <Drawer.Screen
        name="Sent"
        component={MailContainer}
        initialParams={{screenTitle: 'Sent'}}
      />
      <Drawer.Screen
        name="Scheduled"
        component={MailContainer}
        initialParams={{screenTitle: 'Scheduled'}}
      />
      <Drawer.Screen
        name="Outbox"
        component={MailContainer}
        initialParams={{screenTitle: 'Outbox'}}
      />
      <Drawer.Screen
        name="Drafts"
        component={MailContainer}
        initialParams={{screenTitle: 'Drafts'}}
      />
      <Drawer.Screen
        name="All mail"
        component={MailContainer}
        initialParams={{screenTitle: 'All mail'}}
      />
      <Drawer.Screen
        name="Spam"
        component={MailContainer}
        initialParams={{screenTitle: 'Spam'}}
      />
      <Drawer.Screen
        name="Trash"
        component={MailContainer}
        initialParams={{screenTitle: 'Trash'}}
      />
    </Drawer.Navigator>
  );
};

const SingleStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MailDetails"
        component={MailDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Meet"
        component={Meet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Compose"
        component={Compose}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="DrawerStack">
      <Stack.Screen
        name="DrawerStack"
        component={DrawerStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SingleStack"
        component={SingleStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    flex: 1,
  },
  menuTitleContainer: {
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
  menuTitleText: {
    color: '#C8342F',
    fontSize: 20,
    marginLeft: 25,
  },
  menuItemsContainer: {
    paddingTop: 10,
    paddingRight: 7,
  },
  menuItemWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 10,
    paddingVertical: 10,
    marginBottom: 3,
  },
  activeMenuItemWrapper: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#FCE8E7',
  },
  menuCount: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 20,
    width: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    fontSize: 16,
    marginRight: 'auto',
  },
  activeMenuText: {
    color: '#C8342F',
  },
  allLabelsText: {
    marginTop: 20,
    marginLeft: 25,
    fontSize: 15,
    opacity: 0.6,
    marginBottom: 15,
  },
});

export default AppStack;
