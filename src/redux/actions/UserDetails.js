import store from '../store';
import types from '../types';
const { dispatch } = store;

export const userDetails =( data )=> {
console.log(data,"actions")
      dispatch({
        type: types.SAVE_USER_DETAILS,
        payload: data,
    });
};

