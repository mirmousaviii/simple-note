import React from "react";
import {Card, CardActions, CardContent, Grid, IconButton, Menu, MenuItem, Typography} from "@material-ui/core";
import {MoreVert, Delete} from "@material-ui/icons";


function Note(props) {
  const [anchorMenu, setAnchorMenu] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorMenu(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorMenu(null);
  };

  return (
    <Card style={{ margin: 20 }}>
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
          <IconButton onClick={handleMenuOpen}>
            <MoreVert/>
          </IconButton>
          <Menu
            anchorEl={anchorMenu}
            keepMounted
            open={Boolean(anchorMenu)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <Delete/> Delete
            </MenuItem>
          </Menu>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default Note;
