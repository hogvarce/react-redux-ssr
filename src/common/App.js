import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom'
import routes from './routes';
import Main from "./components/Main";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to='/'>Home</Link>
        <Link to='/banners'>Banners</Link>
        <Switch>
            <Route exact path="/" component={Main}/>
            {routes.map((route, i) => <Route key={i} path={route.path} component={route.component} /> )}
        </Switch>
      </div>
    );
  }
}

export default App;
