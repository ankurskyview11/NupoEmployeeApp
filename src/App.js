import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import OtpScreen from './screens/OtpScreen';
import HomeScreen from './screens/HomeScreen'
import BottomTabNavigator from './navigation/BottomNavigator';

import ToDoList from './screens/ToDoList';
import Payslip from './screens/Payslip';
import Meeting from './screens/Meeting';
import Health from './screens/Health';
import Policy from './screens/Policy';
import PolicyDetails from './screens/PolicyDetails';
import Vacation from './screens/Vacation';
import AddVacation from './screens/AddVacation';

import { NativeBaseProvider } from 'native-base';
//import RootNavigator from './scr/TabNavigation/RootNavigator';

const Stack = createStackNavigator()
const AuthNavigator = ()=>{
  return(
     <Stack.Navigator screenOptions={{headerStyle : {backgroundColor : '#A9CF54'}, headerTintColor : '#FFF'}}>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Otp" component={OtpScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Signup" component={SignUpScreen} options={{headerShown:false}} />
        <Stack.Screen name="Main" component={BottomTabNavigator} options={{headerShown:false}}/>
        <Stack.Screen name="ToDoList" component={ToDoList} options={{headerShown:false}} />
        <Stack.Screen name="Payslip" component={Payslip} options={{headerShown:false}} />
        <Stack.Screen name="Meeting" component={Meeting} options={{headerShown:false}} />
        <Stack.Screen name="Health" component={Health} options={{headerShown:false}} />
        <Stack.Screen name="Policy" component={Policy} options={{headerShown:false}} />
        <Stack.Screen name="PolicyDetails" component={PolicyDetails} options={{headerShown:false}} />
        <Stack.Screen name="Vacation" component={Vacation} options={{headerShown:false}} />
        <Stack.Screen name="AddVacation" component={AddVacation} options={{headerShown:false}} />
      </Stack.Navigator>
  )
}
const Navigation = ()=>{
  
  return(
    <NavigationContainer>
       <AuthNavigator />
    </NavigationContainer>
  )
}
export default function App() {
  return (
    <View style={styles.container}>
   <Navigation/>
    <StatusBar style="auto" />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
