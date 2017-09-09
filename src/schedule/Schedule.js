import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import {Grid} from "material-ui";
import Day from "../day/Day";

const styles = {
  root: {
    marginTop: 30,
    width: '100%',
  },
};

class Schedule extends Component {
  constructor(props) {
    console.log(props);
    super()
  }
  render() {
    return (
        <Grid container align="center" justify="center">
        { this.props.play.schedule.map((d, i) => {return (
            <Grid item xs={11} md={8}>
              <Day day={d} key={i}/>
            </Grid>
        )}) }
        </Grid>
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
