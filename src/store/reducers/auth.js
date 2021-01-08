const initialState = {
  token: '',
  isAuthenticated: false,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_LOAD_TOKEN':
    case 'SUCCESS_LOGIN':
      return {
        ...state,
        token: action.token,
        isAuthenticated: true,
      };
    case 'SUCCESS_LOGOUT':
      return {
        ...state,
        token: '',
        isAuthenticated: false,
      };
    default:
      return state;
  }
};