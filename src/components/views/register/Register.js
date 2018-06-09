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
import { registerAction } from '../../../actions/accountActions';
import { checkForInputError } from '../../../utils/commonUtils';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
      passwordConfirmation: '',
      email: '',
      regulationsAccepted: false
    }
  }

  componentDidMount() {
    if (this.props.account.isAuth && localStorage.getItem('o_auth_token')) {
      this.props.history.push('/storage');
    }
  }

  register() {
    const requestParams = {
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
      regulations: this.state.regulationsAccepted,
      password_confirmation: this.state.passwordConfirmation
    };
    
    this.props.registerAction(requestParams).then(
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

  handlePasswordChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmitButtonClick = () => {
    this.register();
  };

  handleCheck = () => {
    this.setState(prevState => ({
      regulationsAccepted: !prevState.regulationsAccepted
    }));
  };

  render() {
    const { authErrors } = this.props.errors;
    return (
      <form noValidate autoComplete="off">
        <InputWrapper>
          <TextField
            error={checkForInputError(authErrors.name)}
            id="name"
            label="Nazwa"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          { authErrors.name && <InputError>{authErrors.name}</InputError> }
        </InputWrapper>
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
            onChange={this.handlePasswordChange}
            type="password"
          />
        </InputWrapper>
        <InputWrapper>
          <TextField
            error={checkForInputError(authErrors.password)}
            id="passwordConfirmation"
            label="Powtórz hasło"
            value={this.state.passwordConfirmation}
            onChange={this.handlePasswordChange}
            type="password"
          />
          { authErrors.password && <InputError>{authErrors.password}</InputError> }
        </InputWrapper>
        <InputWrapper>
          <FormControlLabel
            control={<Checkbox
              checked={this.state.regulationsAccepted}
              onChange={this.handleCheck}
            />}
            label="Accept regulations."
          />
          { authErrors.password && <InputError>{authErrors.regulations}</InputError> }
        </InputWrapper>
        <InputWrapper>
          <SubmitButton onClick={this.handleSubmitButtonClick}>
            Register
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
    registerAction
  }, dispatch);
}

Register = connect(mapStateToProps, mapDispatchToProps)(Register);
export default withRouter(Register);