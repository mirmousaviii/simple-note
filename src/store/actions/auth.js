export const successLogin = (token) => {
  return {
    type: 'SUCCESS_LOGIN',
    token: token,
  };
};

export const successLogout = () => {
  return {
    type: 'SUCCESS_LOGOUT',
  };
};