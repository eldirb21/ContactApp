import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Texts from './Texts';
import {colors} from '../utils';

const Textinputs = ({errors = null, ...props}) => {
  return (
    <View style={styles.containerInput}>
      <TextInput
        keyboardType="default"
        placeholderTextColor={colors.placeholderColor}
        {...props}
        style={[styles.input, errors && styles.errors]}
      />
      {errors && <Texts style={styles.errors}>{errors}</Texts>}
    </View>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    width: '100%',
    backgroundColor: colors.colorWhite,
    marginBottom: 18,
  },
  input: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    width: '100%',
    borderColor: colors.placeholderColor,
    textAlignVertical: 'bottom',
    color: colors.colorBlack,
  },
  errors: {
    color: colors.errorColor,
    borderColor: colors.errorColor,
  },
});

export default Textinputs;
