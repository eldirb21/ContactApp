import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  TextInput,
} from 'react-native';
import Icons from './Icons';
import Texts from './Texts';
import {colors} from '../utils';

const Appbar = ({
  onClose,
  title,
  backable,
  headerStyle,
  backStyle,
  search,
  onChangeSearch,
  visibleSearch = false,
}) => {
  const onBack = () => {
    return (
      <TouchableOpacity
        onPress={onClose}
        activeOpacity={0.6}
        style={[styles.headbackBtn, backStyle]}>
        <Icons name="arrow-back" size={20} color={colors.colorWhite} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, headerStyle]}>
        <StatusBar backgroundColor={'#5aa1a5'} animated barStyle={'default'} />
        {backable && onBack()}
        <View style={styles.Title}>
          <Texts style={styles.textTitle}>{title}</Texts>
        </View>
        {backable && <View style={styles.headbackBtn} />}
      </View>
      {visibleSearch && (
        <View style={styles.searchContainer}>
          <View style={styles.icons}>
            <Icons name="search" size={20} color={'#5aa1a5'} />
          </View>
          <TextInput
            placeholder="Search"
            placeholderTextColor={'gray'}
            style={styles.input}
            onChangeText={onChangeSearch}
            value={search}
          />
          {search && (
            <TouchableOpacity
              style={styles.icons}
              onPress={() => onChangeSearch('')}>
              <Icons name="close" size={20} color={'red'} />
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5aa1a5',
  },
  header: {
    backgroundColor: '#5aa1a5',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 0,
  },
  headbackBtn: {
    alignItems: 'center',
    width: 55,
  },

  Title: {
    flex: 1,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    color: colors.colorWhite,
    fontWeight: '600',
  },
  searchContainer: {
    borderWidth: 1,
    borderColor: colors.colorWhite,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  icons: {padding: 8},
  input: {
    flex: 1,
    color: colors.colorBlack,
    paddingVertical: 12,
  },
});

export default Appbar;
