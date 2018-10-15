import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    // Style object
    const buttonStyle = {
      backgroundColor: 'gray',
      border: '1px solid black'
    }
    return (
      <div className="Home">
        <h1>Welcome to React</h1>
        <p>
          In this recipe you will learn how to add styles to
          components. If you want to learn more, you can visit
          this Youtube Channel at <a href="http://youtube.com/codejobs">Codejobs</a>
        </p>
        <p>
          <button style={buttonStyle}>Click me!</button>
        </p>
      </div>
    )
  }
}

export default Home;