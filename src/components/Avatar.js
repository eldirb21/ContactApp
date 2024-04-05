import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import {Func, colors} from '../utils';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Toastalert from './Toastalert';
import Icons from './Icons';

const Avatar = ({
  loading,
  editable = false,
  onUpload = () => {},
  avatar,
  size = 50,
}) => {
  const [ShowToast, setShowToast] = useState(false);

  const handleCamera = async () => {
    handleImageOptions();
    const result = await launchCamera(Func.options());
    if (result.didCancel) {
    } else if (result.error) {
    } else {
      let source = `data:image/png;base64,${result?.assets[0]?.base64}`;
      onUpload(source);
    }
  };
  const handleLibrary = async () => {
    handleImageOptions();
    const result = await launchImageLibrary(Func.options());
    if (result.didCancel) {
    } else if (result.error) {
    } else {
      let source = `data:image/png;base64,${result?.assets[0]?.base64}`;
      onUpload(source);
    }
  };
  const handleImageOptions = () => {
    setShowToast(!ShowToast);
  };

  return (
    <>
      <TouchableOpacity disabled={!editable} onPress={handleImageOptions}>
        {!loading ? (
          avatar !== undefined &&
          avatar !== null &&
          !avatar?.includes('file:') &&
          avatar !== 'N/A' ? (
            <Image
              source={{uri: avatar}}
              style={[styles.avatar, size && {height: size, width: size}]}
            />
          ) : (
            <View style={[styles.avatar, size && {height: size, width: size}]}>
              <Icons name="person" size={size / 1.5} color="#5aa1a5" />
            </View>
          )
        ) : (
          <View style={[styles.avatar, {width: size, height: size}]}>
            <ActivityIndicator
              animating
              size={'small'}
              color={colors.colorBlue}
            />
          </View>
        )}
      </TouchableOpacity>

      <Toastalert
        onModalHidden={handleImageOptions}
        icons={false}
        message="Upload and attach photo."
        close="Upload"
        save="Camera"
        visible={ShowToast}
        onClose={handleLibrary}
        onSave={handleCamera}
      />
    </>
  );
};

Avatar.prototype = {
  avatar: PropTypes.string,
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#5aa1a5',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Avatar;
