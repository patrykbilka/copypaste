import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEmpty from 'lodash/isEmpty';

import PageHeader from '../../../common/pageheader/PageHeader';
import Item from '../../../common/items/Item';
import { getItems } from '../../../../actions/itemActions';

class Storage extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {
    this.props.getItems().then(() => {
      this.setState({
        items: this.props.items
      })
    }, () => {

    });
  }

  renderItems(items) {
    if (isEmpty(items)) return null;
    const elements = Object.values(items).map(item => {
      return (
        <Item
          key={item.id}
          message={item.content}
        />
      )
    })

    return elements;
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <PageHeader>Your storage</PageHeader>
        { items !== null && this.renderItems(this.state.items)}
      </div>
    )
  }
}


function mapStateToProps({ account, errors, items }) {
  return { account, errors, items };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getItems
  }, dispatch);
}

Storage = connect(mapStateToProps, mapDispatchToProps)(Storage);

export default Storage;