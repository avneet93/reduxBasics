import types from '../types';
const initial_state = {
  userDetails: []
};
export default function (state = initial_state, action) {
console.log("reducer")
  switch (action.type) {
    case types.SAVE_USER_DETAILS: {
      const data = action.payload;
      state.userDetails.push(data)
      console.log(state)
      return {...state }
    }
    default: {
      return { ...state };
    }
  }
}
