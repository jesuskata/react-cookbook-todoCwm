import React, { Component } from 'react';
import './App.css';
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Home from './Home/Home';
import Footer from '../shared/components/layout/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Welcome to JesusKata"/>
        <Content>
          <Home />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
