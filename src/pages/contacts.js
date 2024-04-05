/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import ContactItem from './ui/contactItem';
import ContactForm from './ui/contact-form';
import {
  Appbar,
  EmptyComponent,
  Floating,
  Spinners,
  Toastalert,
} from '../components';
import * as _ from '../services/actions/contact.actions';
import {Func} from '../utils';

const Contacts = props => {

  const [refreshing, setrefreshing] = useState(false);
  const [search, setsearch] = useState('');
  const [state, setState] = useState({
    ShowToast: false,
    ShowForm: false,
    ItemSelect: {},
  });

  useEffect(() => {
    // props.getContact(_.GET_CONTACT_LOAD);
    // dispatch(getContact(_.GET_CONTACT_LOAD));
  }, []);
  console.log(props?.getContact);

  useEffect(() => {
    if (props.contacts) {
      setrefreshing(false);
    }
    if (props.submitStatus?.status >= 400) {
      Func.errorMessage(props.submitStatus);
      props.clearActions(_.CLEANUP_REQUEST);
    }
    if (props.submitStatus === 'success') {
      Func.successMessage();
      props.getContact(_.GET_CONTACT_LOAD);
      props.clearActions(_.CLEANUP_REQUEST);
    }
  }, [props.contacts, props.submitStatus, props.submitStatus?.status]);

  const handleDelete = item => {
    setState({
      ...state,
      ShowToast: !state.ShowToast,
      ItemSelect: item ? item : {},
    });
  };
  const handleEdit = item => {
    setState({
      ...state,
      ShowForm: !state.ShowForm,
      ItemSelect: item ? item : {},
    });
  };
  const handleConfirm = (data, type, isEdit) => {
    if (type === 'reset') {
    } else if (type === 'submit') {
      if (isEdit) {
        props.editContact(_.EDIT_CONTACT_LOAD, data);
      } else {
        props.addContact(_.ADD_CONTACT_LOAD, data);
      }
    } else {
      props.deleteContact(_.DEL_CONTACT_LOAD, state.ItemSelect);
    }
    setState({...state, ShowForm: false, ShowToast: false, ItemSelect: {}});
  };
  const handleSearch = value => {
    setsearch(value);

    if (value?.length >= 3) {
      console.log(value);
      props.getContact(_.GET_CONTACT_LOAD, value);
    }
  };

  const handleRefresh = () => {
    setrefreshing(true);
    props.getContact(_.GET_CONTACT_LOAD);
  };

  const renderItem = ({item, index}) => {
    return (
      <ContactItem
        onDelete={() => handleDelete(item)}
        onEdit={() => handleEdit(item)}
        key={index}
        data={item}
        loading={refreshing ? false : props.isLoading}
      />
    );
  };

  const renderEmpty = () => {
    if (props.isLoading || props.contacts?.length > 0) return null;
    return <EmptyComponent message="No data found" />;
  };

  return (
    <View style={styles.container}>
      <Appbar
        title={'Contact'}
        visibleSearch
        search={search}
        onChangeSearch={handleSearch}
      />
      <FlatList
        onRefresh={handleRefresh}
        refreshing={refreshing}
        pinchGestureEnabled
        endFillColor={'#FFF'}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={props.contacts}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
      />
      <ContactForm
        selectItem={state.ItemSelect}
        visible={state.ShowForm}
        onClose={handleEdit}
        onSave={handleConfirm}
        {...props}
      />
      <Toastalert
        onSave={handleConfirm}
        onClose={() => handleDelete()}
        visible={state.ShowToast}
      />
      <Floating onPress={() => handleEdit()} />
      <Spinners
        visible={
          props.loadingSubmit ? true : refreshing ? false : props.isLoading
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

const mapStateToProps = state => ({
  ...state.contacts,
});

const mapDispatchToProps = {
  getContact: _.getContact,
  addContact: _.addContact,
  editContact: _.editContact,
  deleteContact: _.deleteContact,
  clearActions: _.clearStateContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
