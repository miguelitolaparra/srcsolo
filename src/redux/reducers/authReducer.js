const initialState = {
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case 'REGISTER_ERROR':
    case 'LOGIN_ERROR':
    case 'LOGOUT_ERROR':
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        user: null,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
