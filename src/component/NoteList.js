import React from "react";
import {Grid} from "@material-ui/core";
import Note from "./Note";
import axios from "axios";


function NoteList() {
  function getAccess() {
    //TODO: Make a localStorage management
    if(!localStorage.getItem('token')) {
      axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/auth/token`,
        {email: 'mirmousavi.m@gmail.com', password: 'validPassword'}
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

    return localStorage.getItem('token');
  }

  function getList() {
    //TODO: Make a httpClient management
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/notes`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  React.useEffect(() => {
    let token = getAccess();
    console.log(token);
    // getList()
  }, []);

  return (
    <Grid>
      <Note title="Note title 1"
            content="This is note description. This is note description. This is note description.1"/>
      <Note title="Note title 2"
            content="This is note description. This is note description. This is note description.2"/>
      <Note title="Note title 3"
            content="This is note description. This is note description. This is note description.3"/>
    </Grid>
  );
}

export default NoteList;
