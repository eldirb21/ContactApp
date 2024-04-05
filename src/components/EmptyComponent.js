import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Texts from './Texts';
import {colors} from '../utils';

const EmptyComponent = ({message}) => {
  return (
    <View style={styles.emptydata}>
      <Texts>{message}</Texts>
    </View>
  );
};

const styles = StyleSheet.create({
  emptydata: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.colorWhite,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default EmptyComponent;
