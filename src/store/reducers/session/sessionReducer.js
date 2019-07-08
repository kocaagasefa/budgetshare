import * as types from '../../actions/session/actionTypes';

const initialState = {
  auth:null
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_AUTH_USER:
      return {
        ...state,
        auth:action.auth
      }
    default:
      return state;
  }
};

export default sessionReducer;