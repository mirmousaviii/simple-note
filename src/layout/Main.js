import React from "react";
import NoteCreator from "../component/NoteCreator";
import NoteList from "../component/NoteList";
import {Container, IconButton, Snackbar} from "@material-ui/core";
import {useSelector} from "react-redux";
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch} from "react-redux";
import {beQuiet} from "../store/actions";

function Main() {
  const dispatch = useDispatch();

  function closeSnackbar() {
    dispatch(beQuiet());
  }


  return (
    <Container maxWidth="md">
      <NoteCreator/>
      <NoteList/>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={Boolean(useSelector(state => state.message))}
        autoHideDuration={5000}
        onClose={closeSnackbar}
        message={useSelector(state => state.message)}
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={closeSnackbar}>
            <CloseIcon fontSize="small"/>
          </IconButton>
        }
      />
    </Container>
  );
}

export default Main;