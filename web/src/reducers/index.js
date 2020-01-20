import { handleActions } from 'redux-actions';

const defaultState = {
    test: '',
    showToast: false,
    toastMessage: '',
    loginStatus: false,
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
    LOGINSTATUS: (state, { payload }) => {
        return {
            ...state,
            loginStatus: payload.loginStatus,
        };
    }
}, defaultState )