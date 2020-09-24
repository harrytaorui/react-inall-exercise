import React, {Component} from 'react';
import './app.less';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Calculator from './Component/Calculator'
import Header from "./Component/Header";
import Counter from "./Component/Counter";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/calculator' component={Calculator}/>
            <Route exact path='/countdown' component={Counter}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
