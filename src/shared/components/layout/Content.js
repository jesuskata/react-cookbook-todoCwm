import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Content extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }
  render() {
    const { children } = this.props;
    console.log("This is the children: ", children);
    return (
      <main>
        {children}
      </main>
    );
  }
}

export default Content;