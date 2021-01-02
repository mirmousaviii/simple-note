const initialState = {
  loadingStatus: false,
  notificationMessage: ''
}

export const coreReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_LOADING':
      return {
        ...state,
        loadingStatus: action.loadingStatus
      }
    case 'NOTIFY':
      return {
        ...state,
        notificationMessage: action.notificationMessage
      }
    default:
      return {
        ...state
      }
  }
}