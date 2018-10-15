import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  constructor() {
    // Se need to define super() at the beginning of the
    // constructor to have access to 'this'
    super();
    // Here we initialize our local state as an object
    this.state = {
      name: 'Jesús'
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: 'Eloísa' // Here we update the value of the state
      });
    }, 1000);
  }

  render() {
    console.log("Name: ", this.state.name);
    return (
      <div className="Home">
        {/* Here we render our state name */}
        <p>Hello, my name is {this.state.name}</p>
      </div>
    )
  }
}

export default Home;