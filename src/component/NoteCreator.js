import React from "react";
import {Button, Card, CardActions, CardContent, Dialog, Grid, TextField} from "@material-ui/core";
import axios from "axios";
import {useDispatch} from "react-redux";
import {notify, showLoading} from '../store/actions';

function NoteCreator() {
  const dispatch = useDispatch();
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

  async function getAccess() {
    //TODO: Make a localStorage management
    if(localStorage.getItem('token')) {
      return localStorage.getItem('token');
    }

    // return await axios.post(
    return await axios
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
      });
  }

  function saveNote() {
    dispatch(showLoading(true));

    //TODO: Make a httpClient management
    getAccess().then((token) => {

      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}/notes`,
          {
            title: title,
            content: content
          },
          {
            headers: {
              "typ": "JWT",
              "Authorization": `jwt ${token}`
            }
          }
        )
        .then((response) => {
          toggleDialog();
          dispatch(showLoading(false));
          //TODO: Re-load NoteList
          dispatch(notify('The note added to list!'));
        })
        .catch((error) => {
          dispatch(showLoading(false));
          //TODO: handle errors
          console.log(error);
        });

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
                <Button color="primary" onClick={saveNote}>Save</Button>
              </Grid>
            </CardActions>
          </CardContent>
        </Card>
      </Dialog>
    </Grid>
  );
}

export default NoteCreator;