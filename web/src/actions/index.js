import { createAction } from 'redux-actions';
import apis from '../constants/api';
import { request  } from '../utils'

export const TEST = createAction('TEST');
export const TOAST = createAction('TOAST');
export const LOGINSTATUS = createAction('LOGINSTATUS');


export const handleSleepTest= params => (dispatch, getState) => {
  function callback(data) {
    dispatch(TEST({test: data.testStr}))
  }
  request({
    path: apis.getTestStr,
    method: 'GET',
    callback: callback,
    errCallback: null
  });
    
};

export const handleToast =  payload => (dispatch, getState) => {
  dispatch(TOAST({...payload}));
  if(!payload.sleepTime) {
      setTimeout( () => {
        dispatch(TOAST({showToast: false, toastMessage: ''}));
      }, 3000)
  }
}
