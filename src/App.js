import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import News from './News';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: '', // Default country
    };
  }

  handleCountryChange = (country) => {
    this.setState({ country });
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar onCountryChange={this.handleCountryChange} />
          <Switch>
            <Route exact path="/business" >
              <News key="business" country={this.state.country} category="business" />
            </Route>
            <Route exact path="/entertainment" >
              <News key="entertainment" country={this.state.country} category="entertainment" />
            </Route>
            <Route exact path="/general" >
              <News key="general" country={this.state.country} category="general" />
            </Route>
            <Route exact path="/health" >
              <News key="health" country={this.state.country} category="health" />
            </Route>
            <Route exact path="/science">
              <News key="science" country={this.state.country} category="science" />
            </Route>
            <Route exact path="/sports">
              <News key="sports" country={this.state.country} category="sports" />
            </Route>
            <Route exact path="/technology" >
              <News key="technology" country={this.state.country} category="technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
