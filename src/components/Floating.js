import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icons from './Icons';
import {colors} from '../utils';

const Floating = props => {
  return (
    <TouchableOpacity {...props} activeOpacity={0.7} style={styles.floating}>
      <Icons name="add" size={25} color={colors.colorWhite} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floating: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#5aa1a5',
    borderRadius: 50,
    padding: 15,
    shadowColor: colors.colorBlue,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.44,
    shadowRadius: 2.32,
    elevation: 5,
  },
});

export default Floating;
