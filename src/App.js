import React, { Component } from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import './App.css';
import schedule from './data/schedule.json';
import TitleBar from './titlebar/TitleBar.js';
import Schedule from "./schedule/Schedule";

const styles = {
  root: {
    marginTop: 30,
    width: '100%',
  },
};

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
    this.updatePlay("55630345", "hd");
  }

  updatePlay(code, id) {
    fetch(`https://schedule-maker-dc14c.firebaseio.com/ids/${code}.json`).then(data => data.json().then(user => this.getUserPlays(user.id, id)));
  }

  getUserPlays(uid, id) {
    fetch(`https://schedule-maker-dc14c.firebaseio.com/users/${uid}/${id}.json`).then(data => data.json().then(play => this.setState({ play: play })));
  }

  render() {
    const classes = this.props.classes;
    return (
      <div className="App"> 
        <TitleBar title={this.state.play.title} load={this.handleLoad}/>
        <main className="content">
          <Schedule play={this.state.play}/>
        </main>
      </div>
    );
  }
}

TitleBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
