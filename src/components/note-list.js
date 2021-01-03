import React from 'react';
import {Card, CardContent, Grid, Typography} from '@material-ui/core';
import Note from './note';
import {connect} from 'react-redux';
import {requestNoteList} from '../store/note/noteThunk';

function NoteList({noteState, getNoteList}) {

  React.useEffect(() => {
    getNoteList();
  }, []);

  return (
      <Grid>
        {noteState.noteList.length === 0 ? (
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
        ) : (noteState.noteList.map((item, index) => (
            <Note title={item.title} content={item.content} id={item._id}
                  index={index} key={index}/>
        )))
        }
      </Grid>
  );
}

const mapStateToProps = state => {
  return {
    noteState: state.note,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNoteList: () => dispatch(requestNoteList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);