const initialState = {
  token: '',
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_LOGIN':
    case 'SUCCESS_LOAD_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};