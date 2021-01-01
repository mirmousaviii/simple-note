import React from "react";
import {Box, Card, CardContent, Grid, Typography} from "@material-ui/core";
import Note from "./Note";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {showLoading, getNoteList} from "../store/actions";

function NoteList() {
  // const [noteList, setNoteList] = React.useState([]);
  const dispatch = useDispatch();
  let noteList = useSelector(state => state.note.noteList);

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

  // function getList(token) {
  //   dispatch(showLoading(true));
  //   //TODO: Make a httpClient management
  //   axios
  //     .get(
  //       `${process.env.REACT_APP_BASE_URL}/notes`,
  //       {
  //         headers: {
  //           "typ": "JWT",
  //           "Authorization": `jwt ${token}`
  //         }
  //       }
  //     )
  //     .then((response) => {
  //       setNoteList(response.data);
  //       dispatch(showLoading(false));
  //     })
  //     .catch((error) => {
  //       dispatch(showLoading(false));
  //       console.log(error);
  //     });
  // }

  React.useEffect(() => {
    getAccess().then((token) => {
      // getList(token);
      dispatch(getNoteList(token))
    });

  }, []);

  return (
    <Grid>
      {noteList.length === 0 && (
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

      {noteList.map(item => (
        <Note title={item.title} content={item.content} id={item._id} key={item._id}/>
      ))}

    </Grid>
  );
}

export default NoteList;
