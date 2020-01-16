import { handleActions } from 'redux-actions';

const defaultState = {
    test: '',
    showToast: false,
    toastMessage: '',
}

export default handleActions({
    TEST: (state, { payload }) => {
        return {
          ...state,
          test: payload.test,
        };
    },
    TOAST: (state, { payload }) => {
        return {
          ...state,
          showToast: payload.showToast,
          toastMessage: payload.toastMessage,
        };
    },
}, defaultState )