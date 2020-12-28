import NoteCreator from "../component/NoteCreator";
import NoteList from "../component/NoteList";
import {Grid} from "@material-ui/core";

function Main() {

  // TODO: Use material style
  return (
    <Grid style={{margin: 50}}>
      <NoteCreator/>
      <NoteList/>
    </Grid>
  );
}

export default Main;