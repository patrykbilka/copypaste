import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getItems } from '../../../../actions/itemActions';

class Storage extends React.Component {

  componentWillMount() {
    this.props.getItems();
  }

  render() {
    return (
      <p>It seems your storage is empy. Fill it now, by creating new element.</p>
    )
  }
}


function mapStateToProps({ account, errors }) {
  return { account, errors };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getItems
  }, dispatch);
}

Storage = connect(mapStateToProps, mapDispatchToProps)(Storage);

export default Storage;