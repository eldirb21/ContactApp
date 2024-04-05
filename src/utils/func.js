import {showMessage} from 'react-native-flash-message';

const Func = {
  initName(string) {
    let InitialName = string
      .split(' ')
      .map(x => x.charAt(0).toUpperCase())
      .join('');
    return InitialName;
  },
  errorMessage(message) {
    return showMessage({
      message: 'Error',
      description: message?.statusText || 'Something want wrong!',
      type: 'danger',
      icon: 'danger',
    });
  },
  successMessage() {
    return showMessage({
      message: 'Success',
      type: 'success',
      icon: 'success',
    });
  },
  formValidate(data) {
    let errors = {};
    if (data?.firstName === '') {
      errors.firstName = 'First Name is required!';
    } else if (data?.lastName === '') {
      errors.lastName = 'Last Name is required!';
    } else if (data?.age === '') {
      errors.age = 'Age is required!';
    }
    return errors;
  },
  options() {
    return {
      mediaType: 'photo',
      maxHeight: 100,
      maxWidth: 100,
      includeBase64: true,
    };
  },
};

export default Func;
