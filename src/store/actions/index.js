/**
 * Set a message for the main Snackbar
 * @param message
 * @returns {{type: string, message}}
 */
export const notify = (message) => {
  return {
    type: 'NOTIFY',
    message: message
  }
}

/**
 * Clear the message of Snackbar
 * its similar to notify and I developed this part for sample of action.
 * @returns {{type: string, message: string}}
 */
export const beQuiet = () => {
  return {
    type: 'BE_QUIET',
    message: ''
  }
}

/**
 * Show and hide loading
 * @param status
 * @returns {{type: string, status}}
 */
export const showLoading = (status) => {
  return {
    type: 'SHOW_LOADING',
    loadingStatus: status
  }
}





//Get Token
//Update token
//Save Note
//Get Note List
//Delete Note