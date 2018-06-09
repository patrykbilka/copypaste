import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '../../../common/textfield/TextField';
import SubmitButton from '../../../common/buttons/SubmitButton';
import InputWrapper from '../../../common/form/InputWrapper';
import Checkbox from '../../../common/checkoboxes/Checkbox';
import InputError from '../../../common/form/InputError';
import { createItem } from '../../../../actions/itemActions';
import { checkForInputError } from '../../../../utils/commonUtils';

class NewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      link: ''
    };
  }
  create() {
    const requestParams = {
      link: this.state.link,
    };
    
    this.props.createItem(requestParams).then(
      () => {
        // this.props.history.push('/storage');
      },
      () => {
      }
    );
  }

  handleInputChange = (e) =>  {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmitButtonClick = () => {
    this.create();
  };

  render() {
    return (
      <form noValidate autoComplete="off">
        <InputWrapper>
          <TextField
            id="link"
            label="Nazwa"
            value={this.state.link}
            onChange={this.handleInputChange}
          />
        </InputWrapper>
        <InputWrapper>
          <SubmitButton onClick={this.handleSubmitButtonClick}>
            Zapisz
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
    createItem
  }, dispatch);
}

NewItem = connect(mapStateToProps, mapDispatchToProps)(NewItem);
export default withRouter(NewItem);