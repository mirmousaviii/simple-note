const initialState = {
  loadingStatus: false
}

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_LOADING':
      return {
        ...state,
        loadingStatus: action.loadingStatus
      }
    default:
      return {
        ...state
      }
  }
}