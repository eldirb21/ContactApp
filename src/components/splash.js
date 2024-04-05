import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';

import Texts from './Texts';
import {useIsFocused} from '@react-navigation/native';

const Splash = props => {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setTimeout(() => {
        props.navigation.navigate('Contact');
      }, 2000);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logos} source={require('../assets/logo.png')} />
      <Texts style={styles.appname}>Contact App</Texts>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logos: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    opacity: 0.7,
    marginBottom: 20,
  },
  appname: {
    fontWeight: '600',
    color: '#5aa1a5',
    fontSize: 18,
    textAlign: 'center',
  },
});
