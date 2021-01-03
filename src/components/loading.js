import React from 'react';
import {Backdrop, CircularProgress} from '@material-ui/core';
import {useSelector} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.modal + 1,
    color: '#fff',
  },
}));

function Loading() {
  let loadingStatus = useSelector(state => state.loading.loadingStatus);
  const classes = useStyles();

  return (
      <Backdrop open={loadingStatus} className={classes.backdrop}>
        <CircularProgress color="inherit"/>
      </Backdrop>
  );
}

export default Loading;