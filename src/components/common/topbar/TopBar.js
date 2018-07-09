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
import SvgIcon from '@material-ui/core/SvgIcon';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

import { logoutAction } from '../../../actions/accountActions';

const TopText = styled.span`
  @media screen and (max-width: 500px) {
    display: none;
  }
`

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 2,
    fontSize: '1rem'
  },
  icon: {
    margin: theme.spacing.unit * 2,
    color: '#FFF'
  },
  progress: {
    color: '#FFF',
    margin: '0 1rem'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: '#FFF'
  },
  menuIcon: {
    color: '#FFF'
  }
});

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

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
      <MenuItem key='storage' component={NavLink} to="/storage" onClick={this.handleClose}>Linki</MenuItem>,
      <MenuItem key='new'  component={NavLink} to="/storage/new" onClick={this.handleClose}>Dodaj</MenuItem>,
      <MenuItem key='account' component={NavLink} to="/storage/new" onClick={this.handleClose}>Wyloguj</MenuItem>,
    ];

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: '#006064'}} >
          <Toolbar>
            <IconButton
              component={NavLink}
              to="/"
              className={classes.menuButton}
              aria-label="Menu"
            >
              <HomeIcon 
              className={classes.menuIcon} />
            </IconButton>
              { this.props.loading.isLoading &&
                <CircularProgress size={30}  className={classes.progress} />
              }
            <Typography variant="title" color="inherit" className={classes.flex}>
              
              <TopText>Copy & paste</TopText>
            </Typography>
            { this.props.account.isAuth ?      
              <div>
                <Button color="inherit" onClick={this.props.logoutAction}>
                  Logout
                </Button>
                <IconButton
                  onClick={this.handleClick}
                  className={classes.menuButton}
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
              </div> :
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