import * as React from 'react';
//import { Icon } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <Icon
      name={props.name}
      type={props.type}
      style={{ marginBottom: -3, fontSize : 22, color : props.focused ? Colors.tabIconSelected : Colors.tabIconDefault }}
    />
  );
}
