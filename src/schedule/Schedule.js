import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import {Grid} from "material-ui";
import Day from "../day/Day";
import Slide from 'material-ui/transitions/Slide';
import Dialog from 'material-ui/Dialog';
import Confetti from 'react-dom-confetti';

const styles = {
  root: {
    backgroundColor: '#B388FF',
    height: '100%'
  },
  leftConfetti: {
    position: 'absolute',
    top: 0,
    left: -50
  },
  rightConfetti: {
    position: 'absolute',
    top: 0,
    right: -50
  },
  topConfetti: {
    position: 'absolute',
    top: 0,
    left: '50vw'
  },
  homecomingTitle: {
    textAlign: 'center'
  },
  grace: {
    marginTop: 'calc(50vh - 90px)',
    marginLeft: 25
  },
  daniel: {
    textAlign: 'right',
    marginRight: 25
  },
  center: {
    textAlign: 'center'
  },
  grid: {
    width: '100%'
  }
};

class Schedule extends Component {
  constructor(props) {
    super()
    console.log(this);
  }

  leftConfettiConfig = {
    angle: 0,
    spread: 150,
    startVelocity: 10,
    elementCount: 150,
    decay: 0.95
  };

  rightConfettiConfig = {
    angle: 180,
    spread: 150,
    startVelocity: 10,
    elementCount: 150,
    decay: 0.95
  };

  topConfettiConfig = {
    angle: 270,
    spread: 150,
    startVelocity: 10,
    elementCount: 150,
    decay: 0.95
  };

  state = {
    open: false,
    confetti: false
  }

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true }, () => {
      this.startConfetti();
    });
  };

  startConfetti = () => {
    this.setState({ confetti: true });
  }

  render() {
    const classes = this.props.classes;
    return (
      <div>
        <Dialog
          fullScreen
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          transition={<Slide direction="up" />}
          color="accent"
        >
          <div className={classes.root}>
            <div className={classes.leftConfetti}>  
              <Confetti active={this.state.confetti} config={this.leftConfettiConfig} />
            </div>
            <div className={classes.rightConfetti}>
              <Confetti active={this.state.confetti} config={this.rightConfettiConfig} />
            </div>
            <div className={classes.topConfetti}>
              <Confetti active={this.state.confetti} config={this.topConfettiConfig} />
            </div>
            <Typography type="display1" className={classes.grace}>To: Grace</Typography>
            <Typography type="display3" className={classes.homecomingTitle}>Homecoming?</Typography>
            <Typography type="display1" className={classes.daniel}>From: Daniel</Typography>
            {/* <Typography type="headline" className={classes.center}>10/7</Typography>
            <Typography type="title" className={classes.center}>Grace and Daniel</Typography> */}
          </div>  
        </Dialog> 
        <Grid container align="center" justify="center" className={classes.grid}>
        { this.props.play.schedule.map((d, i) => {return (
            <Grid item xs={11} md={8} key={i}>
              <Day day={d} key={i} handleOpen={() => this.handleOpen()}/>
            </Grid>
        )}) }
        </Grid>
      </div>
    )
  }
}

// function Schedule(props) {
//   const classes = props.classes;
//   return (
//       <AppBar position="static" color="primary">
//         <Toolbar>
//           <Typography type="title" color="inherit">
//             {props.title} Schedule
//           </Typography>
//         </Toolbar>
//       </AppBar>
//   );
// }

Schedule.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Schedule);
