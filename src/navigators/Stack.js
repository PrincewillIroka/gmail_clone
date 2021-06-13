import React, {useState} from 'react';
import {
  Text,
  View,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import shortid from 'shortid';
import {MailContainer, MailDetails, Meet} from '../screens';
import appTheme from '../constants/colors';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const [data, setData] = useState({activeNavTab: 'Inbox'});
  const tabs = ['Inbox', 'Unread'];

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
    props.navigation.navigate(route);
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.menuContainer}>
        <View style={styles.menuTitleContainer}>
          <Text style={styles.menuTitleText}>Gmail</Text>
        </View>
        <View style={styles.menuItemsContainer}>
          {tabs?.map(tab => (
            <TouchableOpacity
              style={[
                styles.menuItemWrapper,
                isActiveTab(tab) && styles.activeMenuItemWrapper,
              ]}
              onPress={() => handleNavigation('Unread', props)}
              key={shortid.generate()}>
              <MaterialIcons
                name="inbox"
                size={25}
                color={getColor(tab)}
                style={styles.menuIcon}
              />
              <Text
                style={styles.menuText}
                style={[
                  styles.menuText,
                  isActiveTab(tab) && styles.activeMenuText,
                ]}>
                {tab}
              </Text>
              <View style={styles.menuCount}>
                <Text style={[isActiveTab(tab) && styles.activeMenuText]}>
                  99
                </Text>
                <MaterialCommunityIcons
                  name="plus"
                  size={13}
                  color={getColor(tab)}
                />
              </View>
            </TouchableOpacity>
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
        // options={{
        //   headerShown: false,
        //   drawerIcon: ({focused, size}) => (
        //     <View>
        //       <Text>Inbox</Text>
        //     </View>
        //   ),
        // }}
        initialParams={{screenTitle: 'Inbox'}}
      />
      <Drawer.Screen
        name="Unread"
        component={MailContainer}
        // options={{headerShown: false}}
        initialParams={{screenTitle: 'Unread'}}
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
  },
  menuText: {
    fontSize: 17,
    marginRight: 'auto',
  },
  activeMenuText: {
    color: '#C8342F',
  },
});

export default AppStack;
