import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { logoutAction } from '../../../actions/accountActions';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class ApplicationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    const authRoutes = [
      <MenuItem component={NavLink} to="/storage" onClick={this.handleClose}>Linki</MenuItem>,
      <MenuItem component={NavLink} to="/storage/new" onClick={this.handleClose}>Dodaj</MenuItem>,
      <MenuItem component={NavLink} to="/storage/new" onClick={this.handleClose}>Wyloguj</MenuItem>,
    ];

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton 
              onClick={this.handleClick}
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              { authRoutes }
            </Menu>
            { this.props.loading.isLoading && 'Loading...'}
            <Typography variant="title" color="inherit" className={classes.flex}>
              Your storage
            </Typography>
            { this.props.account.isAuth ?              
              <Button color="inherit" onClick={this.props.logoutAction}>
                Logout
              </Button> :
              <div>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
                <Button color="inherit" component={Link} to="/register">
                  Register
                </Button>
              </div>  
            }

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

ApplicationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps({ account, loading }) {
  return { account, loading };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    logoutAction
  }, dispatch);
}

ApplicationBar = connect(mapStateToProps, mapDispatchToProps)(ApplicationBar);
export default withStyles(styles)(ApplicationBar);