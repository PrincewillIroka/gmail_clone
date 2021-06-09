import React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {Inbox} from '../screens/Inbox';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Inbox"
        component={Inbox}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
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
    </Stack.Navigator>
  );
}

export default AppStack;
