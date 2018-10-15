import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>&copy; Jesuskata {(new Date()).getFullYear()}</footer>
    );
  }
}

export default Footer;