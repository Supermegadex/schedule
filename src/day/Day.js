import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Collapse from 'material-ui/transitions/Collapse';
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { IconButton } from "material-ui";
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import classnames from "classnames";
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Time from "../time/Time";

const styles = theme => ({
  card: {
    marginBottom: theme.spacingUnit
  },
  media: {
    height: 194,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  flexGrow: {
    flex: '1 1 auto',
  },
  table: {
    overflowX: "auto"
  }
});

class Day extends Component {
  constructor(props) {
    super();
  }

  state = { expanded: false };

  handleExpandClick = () => {
    if (this.props.day.homecoming) {
      this.props.handleOpen();
    }
    else {
      this.setState({ expanded: !this.state.expanded });
    }  
  };

  render() {
    const classes = this.props.classes;
    return (
      <Card className={classes.card}>
        <CardHeader
            title={this.props.day.date}
            subheader={this.props.day.from + " - " + this.props.day.to}
        />
        <CardContent>
        </CardContent>
        <CardActions disableActionSpacing>
          {/*<IconButton aria-label="Add to favorites">*/}
            {/*<FavoriteIcon />*/}
          {/*</IconButton>*/}
          {/*<IconButton aria-label="Share">*/}
            {/*<ShareIcon />*/}
          {/*</IconButton>*/}
          <div className={classes.flexGrow} />
          <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
          <CardContent className={classes.table}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Time</TableCell>
                  <TableCell>People</TableCell>
                  <TableCell>Acting</TableCell>
                  <TableCell>Dancing</TableCell>
                  <TableCell>Singing</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {this.props.day.times.map((d, i) => {
                return (
                    <Time t={d} key={i}/>
                )
              })}
              </TableBody>  
            </Table>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

Day.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Day);