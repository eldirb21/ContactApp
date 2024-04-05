import * as _ from '../actions/contact.actions';

const contactReducer = (state = _.initialContactState, actions) => {
  switch (actions.type) {
    case _.GET_CONTACT_LOAD:
      return {
        ...state,
        isLoading: true,
      };
    case _.GET_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: actions.payload,
        isLoading: actions.loading,
      };
    case _.GET_CONTACT_FAILED:
      return {
        ...state,
        isLoading: actions.loading,
      };

    case _.ADD_CONTACT_LOAD:
      return {
        ...state,
        loadingSubmit: true,
      };
    case _.ADD_CONTACT_SUCCESS:
      return {
        ...state,
        submitStatus: actions.payload,
        loadingSubmit: actions.loading,
      };
    case _.ADD_CONTACT_FAILED:
      return {
        ...state,
        submitStatus: actions.payload,
        loadingSubmit: actions.loading,
      };

    case _.EDIT_CONTACT_LOAD:
      return {
        ...state,
        loadingSubmit: true,
      };
    case _.EDIT_CONTACT_SUCCESS:
      return {
        ...state,
        submitStatus: actions.payload,
        loadingSubmit: actions.loading,
      };
    case _.EDIT_CONTACT_FAILED:
      return {
        ...state,
        submitStatus: actions.payload,
        loadingSubmit: actions.loading,
      };

    case _.DEL_CONTACT_LOAD:
      return {
        ...state,
        loadingSubmit: true,
      };
    case _.DEL_CONTACT_SUCCESS:
      return {
        ...state,
        submitStatus: actions.payload,
        loadingSubmit: actions.loading,
      };
    case _.DEL_CONTACT_FAILED:
      return {
        ...state,
        submitStatus: actions.payload,
        loadingSubmit: actions.loading,
      };
    case _.CLEANUP_RECEIVED:
      return {
        ...state,
        submitStatus: false,
        loadingSubmit: false,
      };

    default:
      return state;
  }
};

export default contactReducer;
