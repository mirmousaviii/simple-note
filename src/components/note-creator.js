import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  Grid,
  TextField,
} from '@material-ui/core';
import {requestAddNote} from '../store/note/noteThunk';
import {connect} from 'react-redux';

function NoteCreator({addNote}) {
  const [openModal, setOpenModal] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

  function toggleDialog() {
    if (openModal === false) {
      resetForm();
    }

    setOpenModal(!openModal);
  }

  function resetForm() {
    setTitle('');
    setContent('');
  }

  function saveNote() {
    toggleDialog();
    addNote(title, content);
  }

  return (
      <Grid style={{margin: 20}}>
        <Button variant="outlined" fullWidth size="large"
                onClick={toggleDialog}>Take a note ...</Button>

        <Dialog md={10} open={openModal} onClose={toggleDialog}>
          <Card>
            <CardContent>
              <TextField label="Title" variant="outlined" fullWidth
                         margin="normal" value={title}
                         onChange={e => setTitle(e.target.value)}/>
              <TextField label="Note" multiline rows={6} variant="outlined"
                         fullWidth margin="normal" value={content}
                         onChange={e => setContent(e.target.value)}/>
              <CardActions>
                <Grid container direction="row" justify="flex-end">
                  <Button color="primary"
                          onClick={toggleDialog}>Discard</Button>
                  <Button color="primary" onClick={saveNote}>Save</Button>
                </Grid>
              </CardActions>
            </CardContent>
          </Card>
        </Dialog>
      </Grid>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addNote: (title, content) => dispatch(requestAddNote(title, content)),
  };
};

export default connect(null, mapDispatchToProps)(NoteCreator);