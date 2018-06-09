import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '../../common/textfield/TextField';
import SubmitButton from '../../common/buttons/SubmitButton';
import InputWrapper from '../../common/form/InputWrapper';
import Checkbox from '../../common/checkoboxes/Checkbox';
import InputError from '../../common/form/InputError';
import { loginAction } from '../../../actions/accountActions';
import { checkForInputError } from '../../../utils/commonUtils';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      email: '',
    }
  }

  componentDidMount() {
    if (this.props.account.isAuth && localStorage.getItem('o_auth_token')) {
      this.props.history.push('/storage');
    }
  }

  login() {
    const requestParams = {
      email: this.state.email,
      password: this.state.password,
    };
    
    this.props.loginAction(requestParams).then(
      () => {
        this.props.history.push('/storage');
      },
      () => {

      }
    );
  }

  handleInputChange = (e) =>  {
    this.setState({
      [e.target.id]: e.target.value.toLowerCase()
    });
  };

  handleSubmitButtonClick = () => {
    this.login();
  };

  render() {
    const { authErrors } = this.props.errors;
    return (
      <form noValidate autoComplete="off">

        { authErrors.message && <InputError>{authErrors.message}</InputError> }
        <InputWrapper>
          <TextField
            error={checkForInputError(authErrors.email)}
            id="email"
            label="Adres e-mail"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          { authErrors.email && <InputError>{authErrors.email}</InputError> }
        </InputWrapper>
        <InputWrapper>
          <TextField
            error={checkForInputError(authErrors.password)}
            id="password"
            label="Hasło"
            value={this.state.password}
            onChange={this.handleInputChange}
            type="password"
          />
          { authErrors.password && <InputError>{authErrors.password}</InputError> }
        </InputWrapper>
        <InputWrapper>
          <SubmitButton onClick={this.handleSubmitButtonClick}>
            Login
          </SubmitButton>
        </InputWrapper>
      </form>
    )
  }
}

function mapStateToProps({ account, errors }) {
  return { account, errors };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loginAction
  }, dispatch);
}

Login = connect(mapStateToProps, mapDispatchToProps)(Login);
export default withRouter(Login);