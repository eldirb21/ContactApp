import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Func from '../../utils/func';
import {Avatar, Icons, Texts} from '../../components';
import {colors} from '../../utils';

const ContactItem = ({data, loading, onEdit, onDelete}) => {
  if (data?.photo?.includes('file:')) {
    console.log(data?.photo);
  }
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.contactItem}>
        <Avatar
          loading={loading}
          avatar={data.photo}
          title={Func.initName(`${data?.firstName} ${data?.lastName}`)}
        />
        <View style={styles.subItem}>
          <Texts
            style={styles.name}>{`${data?.firstName} ${data?.lastName}`}</Texts>
          <Texts style={styles.age}>{'Age ' + data.age}</Texts>
        </View>
        <View style={styles.subAction}>
          <TouchableOpacity
            style={styles.btnAction}
            activeOpacity={0.5}
            onPress={onEdit}>
            <Icons name="edit" size={20} color="green" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnAction}
            activeOpacity={0.5}
            onPress={onDelete}>
            <Icons name="delete" size={20} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contactItem: {
    borderWidth: 0.2,
    borderColor: 'rgba(0,0,0,.2)',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subItem: {
    marginLeft: 20,
    flex: 1,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'capitalize',
    color: colors.colorBlack,
  },
  age: {
    fontWeight: '500',
    color: colors.borderGrayColor,
  },
  subAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnAction: {
    marginLeft: 5,
    padding: 8,
    borderRadius: 100,
    zIndex: 9999,
    borderWidth: 0.2,
    borderColor: 'rgba(0,0,0,0.2)',
  },
});

export default ContactItem;
