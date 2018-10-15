import React from 'react';

const Footer = () => { // Since we don't have props, we can directly return our JSX
  return (
    <footer>&copy; Jesuskata {(new Date()).getFullYear()}</footer>
  );
}

export default Footer;