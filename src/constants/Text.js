import * as React from 'react';
import { Text } from 'react-native';

export function CustomText(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'CoHeadlineW23-' + (props.type ? props.type : 'ArabicRegular'), fontSize : (props.size ? props.size : 14)}]} />;
}