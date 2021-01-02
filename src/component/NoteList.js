import React from "react";
import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import Note from "./Note";
import axios from "axios";
import {connect} from "react-redux";
import {getNoteList} from "../store/actions";
import store from "../store";

function NoteList({noteState}) {

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

  React.useEffect(() => {
    getAccess().then((token) => {
      // getList(token);
      // dispatch(getNoteList(token));
      store.dispatch(getNoteList(token));
    });

  }, []);

  return (
    <Grid>
      {noteState.noteList.length === 0 && (
        <Card style={{margin: 20}}>
          <CardContent>
            <Typography variant="h6" component="h6">
              Empty!
            </Typography>
            <br/>
            <Typography variant="body2" component="p">
              Note list is empty
            </Typography>
          </CardContent>
        </Card>
      )}

      {noteState.noteList.map((item, index) => (
        <Note title={item.title} content={item.content} id={item._id} index={index} key={index}/>
      ))}

    </Grid>
  );
}


function mapStateToProps(state) {
  return {
    noteState: state.note
  }
}


export default connect(mapStateToProps)(NoteList);