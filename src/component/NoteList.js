import React from "react";
import {Grid} from "@material-ui/core";
import Note from "./Note";


function NoteList() {

  return (
    <Grid>
     <Note title="Note title 1" content="This is note description. This is note description. This is note description.1"/>
     <Note title="Note title 2" content="This is note description. This is note description. This is note description.2"/>
     <Note title="Note title 3" content="This is note description. This is note description. This is note description.3"/>
    </Grid>
  );
}

export default NoteList;
