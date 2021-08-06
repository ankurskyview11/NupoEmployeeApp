import * as React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';

export default function TabBarText(props) {
  return (
    <Text
      
      //type={props.type}
      style={{ marginBottom:-10, fontSize : 14, color : props.focused ? Colors.tabIconSelected : Colors.tabIconDefault }}
    >{props.name}</Text>
  );
}
