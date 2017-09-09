import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import {IconButton, List, ListItem, ListItemText} from "material-ui";
import classnames from "classnames";

const styles = theme => ({
  media: {
    height: 194,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  min: {
    flex: '0 0 auto'
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  flexGrow: {
    flex: '1 1 auto',
  },
  people: {
    width: '30%',
    minWidth: '20em'
  }
});

class Day extends Component {
  constructor(props) {
    super();
    this.classes = props.classes;
  }

  classes;
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  getActing() {
    if (this.props.t.acting) {
      return <ListItemText primary={this.props.t.acting} secondary="Acting" />
    }
    else return false;
  }

  getDancing() {
    if (this.props.t.dancing) {
      return <ListItemText primary={this.props.t.dancing} secondary="Dancing" />
    }
    else return false;
  }

  getMusic() {
    if (this.props.t.music) {
      return <ListItemText primary={this.props.t.music} secondary="Dancing" />
    }
    else return false;
  }

  render() {
    return (
      <ListItem button>
        <ListItemText primary={this.props.t.from} />
        {this.getActing()}
        {this.getDancing()}
        {this.getMusic()}
        <ListItemText className={classnames(this.classes.min, this.classes.people)} primary={this.props.t.people} />
      </ListItem>
    );
  }
}

Day.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Day);