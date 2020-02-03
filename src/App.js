import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from './containers/main'
import Nav from './components/nav'
import Banner from './components/banner'

class App extends React.Component {

  render() {
  return (
    <div>
      <Banner />
      <Nav />
      <Main />
    </div>
  );
  }
}

export default App;
