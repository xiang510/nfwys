import { handleActions } from 'redux-actions';

const defaultState = {
    test: '',
}

export default handleActions({
    TEST: (state, action) => {
        return {
          ...state,
          test: action.payload.test,
        };
    },
}, defaultState )