const initialState = {
  token: '',
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_LOGIN':
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};