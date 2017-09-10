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

  render() {
    const classes = this.props.classes;
    return (
      <div className="App"> 
        <TitleBar title={this.state.play.title}/>
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
