import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  > div {
    background-color: #5f72bd;
    width: 100% !important;
  }
`
const styles = {
  root: {
    flexGrow: 1,
  },
};

class DesktopNavigation extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Wrapper>
        <Paper className={classes.root}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Linki" />
            <Tab label="Konto" />
            <Tab label="Dodaj" />
          </Tabs>
        </Paper>
      </Wrapper>
    );
  }
}

DesktopNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DesktopNavigation);