import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Dashboard from '../HomeScreen';
import Notifications from '../NotificationScreen';
import Chats from '../ChatScreen';
import Accounts from '../AccountScreen';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Accounts" component={Accounts} />
    </Tab.Navigator>
  );
};

export default TabNavigator;