import  {types}  from '../Types/Types';

const initialState = {
  logged: false,
};

export const AuthReducer = ( state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };

    case types.logout:
      return {
        logged: false,
        user: action.payload
      };
    default:
      return state;
  }
};
