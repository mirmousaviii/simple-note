import React from "react";
import {Button, Card, CardActions, CardContent, Dialog, Grid, TextField} from "@material-ui/core";

function NoteCreator() {
  const [openModal, setOpenModal] = React.useState(false);

  function toggleDialog() {
    setOpenModal(!openModal);
  }

  return (
    <Grid style={{ margin: 20 }}>
      <Button variant="outlined" fullWidth size="large" onClick={toggleDialog}>Take a note ...</Button>

      <Dialog md={10} open={openModal} onClose={toggleDialog}>
        <Card>
          <CardContent>
            <TextField label="Title" variant="outlined" fullWidth margin="normal"/>
            <TextField label="Note" multiline rows={6} variant="outlined" fullWidth margin="normal"/>
            <CardActions>
              <Grid container direction="row" justify="flex-end">
                <Button color="primary" onClick={toggleDialog}>Discard</Button>
                <Button color="primary">Save</Button>
              </Grid>
            </CardActions>
          </CardContent>
        </Card>
      </Dialog>
    </Grid>
  );
}

export default NoteCreator;