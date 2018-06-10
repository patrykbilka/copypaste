import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  > div {
    width: auto !important;
  }
  @media (min-width: 767px) {
    display: none;
  }
`
const styles = {
  root: {
    width: 500,
  },
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Wrapper>
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction component={Link} to="/storage" label="Linki" icon={<RestoreIcon />} />
          <BottomNavigationAction component={Link} to="/storage/new"label="Dodaj" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Konto" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Wrapper>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);