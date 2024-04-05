import React from 'react';
import {StyleSheet} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {colors} from '../utils';

const Spinners = ({visible, message}) => {
  return (
    <Spinner
      visible={visible}
      textContent={message}
      textStyle={styles.message}
    />
  );
};

const styles = StyleSheet.create({
  message: {
    color: colors.colorWhite,
    marginTop: 5,
  },
});

export default Spinners;
