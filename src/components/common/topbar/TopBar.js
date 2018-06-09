import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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

function ApplicationBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            { props.loading.isLoading && 'Loading...'}
          </Typography>
          { props.account.isAuth ?              
            <Button color="inherit" onClick={props.logoutAction}>
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