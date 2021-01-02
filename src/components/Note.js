import React from "react";
import {Card, CardActions, CardContent, Grid, IconButton, Menu, MenuItem, Typography} from "@material-ui/core";
import {MoreVert, Delete} from "@material-ui/icons";
import axios from "axios";
import {connect, useDispatch} from "react-redux";
import {requestDeleteNote} from "../store/note/noteThunk";
import {toggleLoading} from "../store/core/coreActions";

function Note(props) {
  const dispatch = useDispatch();
  const [anchorMenu, setAnchorMenu] = React.useState(null);

  const toggleMenu = (event) => {
    setAnchorMenu(anchorMenu == null ? event.currentTarget : null);
  };

  function deleteNote() {
    dispatch(toggleLoading(true));

    getAccess().then((token) => {
      props.deleteNote(props.id, props.index);
    });


    // toggleMenu();
    setAnchorMenu(null);
  }


  async function getAccess() {
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
        console.log(error);
      });
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
