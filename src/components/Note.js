import React from "react";
import {Card, CardActions, CardContent, Grid, IconButton, Menu, MenuItem, Typography} from "@material-ui/core";
import {MoreVert, Delete} from "@material-ui/icons";
import {connect} from "react-redux";
import {requestDeleteNote} from "../store/note/noteThunk";

function Note(props) {
  const [anchorMenu, setAnchorMenu] = React.useState(null);

  const toggleMenu = (event) => {
    setAnchorMenu(anchorMenu == null ? event.currentTarget : null);
  };

  function deleteNote() {
    props.deleteNote(props.id, props.index);
    toggleMenu();
  }

  return (
    <Card style={{margin: 20}}>
      <CardContent>
        <Typography variant="h6" component="h6">
          {[props.title]}
        </Typography>
        <br/>
        <Typography variant="body2" component="p">
          {props.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container direction="row" justify="flex-end">
          <IconButton onClick={toggleMenu}>
            <MoreVert/>
          </IconButton>
          <Menu
            anchorEl={anchorMenu}
            keepMounted
            open={Boolean(anchorMenu)}
            onClose={toggleMenu}
          >
            <MenuItem onClick={deleteNote}>
              <Delete/> Delete
            </MenuItem>
          </Menu>
        </Grid>
      </CardActions>
    </Card>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    deleteNote: (id, index) => dispatch(requestDeleteNote(id, index))
  }
}

export default connect(null, mapDispatchToProps)(Note);
