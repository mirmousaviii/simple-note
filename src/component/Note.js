import React from "react";
import {Card, CardActions, CardContent, Grid, IconButton, Menu, MenuItem, Typography} from "@material-ui/core";
import {MoreVert, Delete} from "@material-ui/icons";
import axios from "axios";
import {useDispatch} from "react-redux";
import {notify} from "../store/actions";

function Note(props) {
  const dispatch = useDispatch();
  const [anchorMenu, setAnchorMenu] = React.useState(null);

  const toggleMenu = (event) => {
    setAnchorMenu(anchorMenu == null ? event.currentTarget : null);
  };

  function deleteNote() {
    //TODO: Make a httpClient management
    getAccess().then((token) => {
      axios
        .delete(
          `${process.env.REACT_APP_BASE_URL}/notes/${props.id}`,
          {
            headers: {
              "typ": "JWT",
              "Authorization": `jwt ${token}`
            }
          }
        )
        .then((response) => {
          // console.log(response);
          dispatch(notify('The note deleted!'))
          //TODO: Re-load NoteList
        })
        .catch((error) => {
          console.log(error);
        });

    });


    // toggleMenu();
    setAnchorMenu(null);
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

export default Note;
