import React from "react";
import {IconButton, Snackbar} from "@material-ui/core";
import {useSelector} from "react-redux";
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch} from "react-redux";
import {notify} from "../store/core/coreActions";

function Notification() {
  const dispatch = useDispatch();
  let message = useSelector(state => state.core.notificationMessage);

  function closeSnackbar() {
    dispatch(notify(''));
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={Boolean(message)}
      autoHideDuration={5000}
      onClose={closeSnackbar}
      message={message}
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={closeSnackbar}>
          <CloseIcon fontSize="small"/>
        </IconButton>
      }
    />
  );
}

export default Notification;