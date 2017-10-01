import React, { Component } from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import './App.css';
import schedule from './data/schedule.json';
import TitleBar from './titlebar/TitleBar.js';
import Schedule from "./schedule/Schedule";
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import { IconButton, TextField } from "material-ui";
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import DoneIcon from 'material-ui-icons/Done';

const styles = theme => ({
  root: {
    marginTop: 40
  },
  textField: {
    margin: theme.spacing.unit
  },
  id: {
    margin: theme.spacing.unit,
    width: 100
  },
  title: {
    margin: theme.spacing.unit,
    width: 200
  },
  flexGrow: {
    flex: '1 1 auto',
  }
});

class App extends Component {
  constructor(props) {
    super();
  }

  state = {
    play: schedule["hello dolly"]
  };

  error(message) {
    console.log(message);
  }

  handleLoad = () => {
    this.updatePlay("23286327", "hd");
  };

  updatePlay(code, id) {
    fetch(`https://schedule-maker-dc14c.firebaseio.com/ids/${code}.json`).then(data => data.json().then(user => this.getUserPlays(user.id, id)));
  }

  getUserPlays(uid, id) {
    fetch(`https://schedule-maker-dc14c.firebaseio.com/users/${uid}/${id}.json`).then(data => data.json().then(play => this.setState({ play: play })));
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = (id, code) => {
    this.setState({ open: false });
    this.updatePlay(code, id);
  };

  render() {
    const classes = this.props.classes;
    return (
      <div className="App"> 
        <TitleBar title={this.state.play.title} load={this.handleClickOpen}/>
        <main className="content">
          <Schedule play={this.state.play}/>
        </main>
        <Dialog open={this.state.open} onRequestClose={this.handleClose} transition={<Slide direction={"up"} />}>
          <Card>
            <CardHeader title={"Load Production"}/>
            <CardContent>
              <TextField
                  id="id"
                  label="ID"
                  className={classes.id}
                  value={this.state.id}
                  onChange={event => this.setState({ id: event.target.value })}
                  margin="normal"
              />
              <TextField
                  id="title"
                  label="Access Code"
                  className={classes.title}
                  value={this.state.title}
                  onChange={event => this.setState({ title: event.target.value })}
                  margin="normal"
              />
            </CardContent>
            <CardActions>
              <div className={classes.flexGrow} />
              <IconButton color="primary" aria-label="Finish" onClick={() => this.handleRequestClose(this.state.id, this.state.title)}>
                <DoneIcon/>
              </IconButton>
            </CardActions>
          </Card>
        </Dialog>
      </div>
    );
  }
}

TitleBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
