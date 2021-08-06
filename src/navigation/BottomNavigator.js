import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

 import TabBarIcon from '../component/TabBarIcon';

 import TabBarText from '../component/TabBarText';
// Start Import Screens



import { Text } from 'react-native';
import Home from '../screens/HomeScreen';
import Notification from '../screens/NotificationScreen';
import Chat from '../screens/ChatScreen';
import Account from '../screens/AccountScreen';


// End Import Screens



const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

function AccountStack(){
  return(
    <Stack.Navigator initialRouteName="Account">
      <Stack.Screen name="Account" component={Account} options={{headerShown : false}} />
      <Stack.Screen name="EditProfile" component={EditProfile} options={{headerShown : false}} />
      <Stack.Screen name="MyOrders" component={MyOrders} options={{headerShown : false}} />
      <Stack.Screen name="OrderDetail" component={OrderDetail} options={{headerShown : false}} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} options={{headerShown : false}} />
      <Stack.Screen name="Address" component={Address} options={{headerShown : false}} />
      <Stack.Screen name="FAQ" component={FAQ} options={{headerShown : false}} />
      <Stack.Screen name="ContactUs" component={ContactUs} options={{headerShown : false}} />
      <Stack.Screen name="PrivacyPolicy" component={Privacypolicy} options={{headerShown : false}} />
      <Stack.Screen name="ReturnPolicy" component={Returnpolicy} options={{headerShown : false}} />
      <Stack.Screen name="TermAndCondition" component={TermAndCondition} options={{headerShown : false}} />
      <Stack.Screen name="ChangeLanguage" component={ChangeLanguage} options={{headerShown : false}} />
    </Stack.Navigator>
  )
}

export default function BottomTabNavigator({ navigation, route }) {

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME} 
      tabBarOptions={{
        tabStyle : {
          marginTop : 4
        },
        style: {
          
          width : "100%",
           //borderWidth : 4,
            //borderColor : "red",
          //flexDirection: 'column',
          //alignSelf: 'center',
          //elevation: 3,
          borderTopStartRadius: 25,
          borderTopEndRadius: 25,
          backgroundColor: 'white'

      },
      
      }}
    >
      
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
        tabBarLabel : ({ focused }) => <TabBarText focused={focused} name="Dashboard">Home</TabBarText>,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" type="FontAwesome" />,
        }}
      />

      <BottomTab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel : ({ focused }) => <TabBarText focused={focused} name="Notification">Notification</TabBarText>,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="bell" type="FontAwesome" />,
        }}
      />

      <BottomTab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel : ({ focused }) => <TabBarText  focused={focused} name="Chat">Chat</TabBarText>,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="comment" type="FontAwesome" />,
        }}
      />
      
     

      <BottomTab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel : ({ focused }) => <TabBarText focused={focused} name="Account">Account</TabBarText>,
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="user" type="FontAwesome" />,
        }}
      />
      
    </BottomTab.Navigator>
  );
}
