import React from "react";
import {Button, Card, CardActions, CardContent, Dialog, Grid, TextField} from "@material-ui/core";
import axios from "axios";
import {saveNote} from '../store/actions';
import store from "../store";

function NoteCreator() {
  const [openModal, setOpenModal] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');


  function toggleDialog() {
    resetForm();
    setOpenModal(!openModal);
  }

  function resetForm() {
    setTitle('');
    setContent('');
  }

  function getAccess() {
    //TODO: Make a localStorage management
    if(localStorage.getItem('token')) {
      return Promise.resolve(localStorage.getItem('token'));
    }

    // return await axios.post(
    return Promise.resolve(axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/auth/token`,
        {
          email: process.env.REACT_APP_USERNAME,
          password: process.env.REACT_APP_PASSWORD
        }
      )
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        return localStorage.getItem('token');
      })
      .catch((error) => {
        //TODO: Handle errors
        console.log(error);
      }));
  }

  function submitNote() {
    toggleDialog();

    //TODO: Make a httpClient management
    getAccess().then((token) => {

      store.dispatch(saveNote(token, title, content));
    });
  }

  return (
    <Grid style={{margin: 20}}>
      <Button variant="outlined" fullWidth size="large" onClick={toggleDialog}>Take a note ...</Button>

      <Dialog md={10} open={openModal} onClose={toggleDialog}>
        <Card>
          <CardContent>
            <TextField label="Title" variant="outlined" fullWidth margin="normal" value={title}
                       onChange={e => setTitle(e.target.value)}/>
            <TextField label="Note" multiline rows={6} variant="outlined" fullWidth margin="normal" value={content}
                       onChange={e => setContent(e.target.value)}/>
            <CardActions>
              <Grid container direction="row" justify="flex-end">
                <Button color="primary" onClick={toggleDialog}>Discard</Button>
                <Button color="primary" onClick={submitNote}>Save</Button>
              </Grid>
            </CardActions>
          </CardContent>
        </Card>
      </Dialog>
    </Grid>
  );
}

export default NoteCreator;