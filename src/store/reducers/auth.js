const initialState = {
  token: '',
  isAuthenticated: false,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_LOGIN':
    case 'SUCCESS_LOAD_TOKEN':
      return {
        ...state,
        token: action.token,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};