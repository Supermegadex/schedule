import React, { Component } from 'react';
import Button from 'material-ui/Button';
import logo from './logo.svg';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import './App.css';
import TitleBar from './titlebar/TitleBar.js';

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
  render() {
    const classes = this.props.classes;
    return (
      <div className="App">
        <TitleBar title="Hello, Dolly!" />
        <main class="content">
        </main>
      </div>
    );
  }
}

TitleBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
