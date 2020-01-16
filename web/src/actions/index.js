import { createAction } from 'redux-actions';
import * as apis from '../constants/api';
import { request  } from '../utils'
export const TEST = createAction('TEST');


export const handleSleepTest= params => (dispatch, getState) => {
    function update(data) {
      dispatch({
        type: 'TEST',
        payload: {
          test: data.testStr,
        },
       })
    }

    request({
      path: apis.getTestStr,
      method: 'GET',
      callback: update,
      errCallback: null
    });
    
  };