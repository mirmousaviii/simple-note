export const notify = (message) => {
  return {
    type: 'NOTIFY',
    notificationMessage: message
  }
}

export const toggleLoading = (status) => {
  return {
    type: 'TOGGLE_LOADING',
    loadingStatus: status
  }
}