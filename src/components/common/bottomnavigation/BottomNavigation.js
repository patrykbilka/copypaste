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
  @media (min-width: 992px) {
    display: none;
  }
`
const styles = {
  root: {
    width: 500,
    color: '#f50057'
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
          <BottomNavigationAction
            component={Link}
            to="/storage"
            label="Linki"
            style={{
              color: value === 0 && '#f50057'
            }}
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to="/storage/new"
            label="Dodaj"
            style={{
              color: value === 1 && '#f50057'
            }}
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Konto"
            style={{
              color: value === 2 && '#f50057'
            }}
            icon={<LocationOnIcon />}
          />
        </BottomNavigation>
      </Wrapper>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);