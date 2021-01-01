const initialState = {
  message: ''
}

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NOTIFY':
    case 'BE_QUIET':
      return {
        ...state,
        message: action.message
      }
    default:
      return {
        ...state
      }
  }
}