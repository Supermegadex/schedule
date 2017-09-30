import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import CloudDownload from 'material-ui-icons/CloudDownload';

const styles = {
  flex: {
    flex: '1 1 auto'
  }
};

function TitleBar(props) {
  const classes = props.classes;
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography type="title" color="inherit">
          {props.title} Schedule
        </Typography>
        <div className={classes.flex} />
        <IconButton onClick={() => props.load()}>
          <CloudDownload />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

TitleBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitleBar);