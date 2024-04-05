import * as React from 'react';
import {Text} from 'react-native';
import {colors} from '../utils';
export default props => {
  const defStyle = {
    fontSize: 14,
    fontWeight: '400',
    color: colors.labelTextColor,
  };
  const incStyle = Array.isArray(props.style) ? props.style : [props.style];

  return <Text {...props} style={[defStyle, ...incStyle]} />;
};
