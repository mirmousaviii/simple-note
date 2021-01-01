import React from "react";
import {Box, Grid} from "@material-ui/core";
import Note from "./Note";
import axios from "axios";
import {useDispatch} from "react-redux";
import {showLoading} from "../store/actions";

function NoteList() {
  const [noteList, setNoteList] = React.useState([]);
  const dispatch = useDispatch();

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

  function getList(token) {
    dispatch(showLoading(true));
    //TODO: Make a httpClient management
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/notes`,
        {
          headers: {
            "typ": "JWT",
            "Authorization": `jwt ${token}`
          }
        }
      )
      .then((response) => {
        setNoteList(response.data);
        dispatch(showLoading(false));
      })
      .catch((error) => {
        dispatch(showLoading(false));
        console.log(error);
      });
  }

  React.useEffect(() => {
    getAccess().then((token) => {
      //TODO: Add loading
      getList(token);
    });

  }, []);

  return (
    <Grid>
      {noteList.length === 0 && (
        <Box textAlign="center">
          <h4>Note list is empty</h4>
        </Box>
      )}

      {noteList.map(item => (
        <Note title={item.title} content={item.content} id={item._id} key={item._id} />
      ))}

    </Grid>
  );
}

export default NoteList;
