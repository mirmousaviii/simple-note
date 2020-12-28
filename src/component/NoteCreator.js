import React from "react";
import {Button, Card, CardActions, CardContent, Dialog, Grid, TextField} from "@material-ui/core";

function NoteCreator() {
  const [openModal, setOpenModal] = React.useState(false);


  return (
    <Grid style={{ margin: 20 }}>
      <Button variant="outlined" fullWidth size="large" onClick={() => setOpenModal(true)}>Take a note ...</Button>

      <Dialog md={10} open={openModal} onClose={() => setOpenModal(false)}>
        <Card>
          <CardContent>
            <TextField label="Title" variant="outlined" fullWidth margin="normal"/>
            <TextField label="Note" multiline rows={6} variant="outlined" fullWidth margin="normal"/>
            <CardActions>
              <Grid container direction="row" justify="flex-end">
                <Button color="primary" onClick={() => setOpenModal(false)}>Discard</Button>
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