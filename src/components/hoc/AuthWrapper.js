import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';

import { setAccountErrors } from '../../actions/accountActions';

const propTypes = {
  account: PropTypes.object.isRequired
};

export default function (ComposedComponent) {
  class Authenticate extends React.Component {
    componentWillMount() {
      this.checkAuthentication(this.props.account.isAuth);
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuthentication(nextProps.account.isAuth);
    }
    componentWillUpdate(nextProps) {
      this.checkAuthentication(nextProps.account.isAuth);
    }

    checkAuthentication = (isAuthenticatedValue) => {
      if (!isAuthenticatedValue) {
        this.props.setAccountErrors({ message: 'Najpierw się zaloguj.' });
        this.props.history.push('/login');
      }
    };

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  Authenticate.propTypes = propTypes;

  function mapStateToProps({ account }) {
    return {
      account
    };
  }
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setAccountErrors }, dispatch);
  }
  return connect(mapStateToProps, mapDispatchToProps)(Authenticate);
}