import { createAction } from 'redux-actions';

export const TEST = createAction('TEST');

export const handleSleepTest= params => async (dispatch, getState) => {
    let res = await new Promise( (resolve, reject) => {
        setTimeout( () =>  resolve({data: 'test is ok!'}), 2000)
    });
    dispatch({
        type: 'TEST',
        payload: {
          test: res.data,
        },
    })
  };