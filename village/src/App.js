import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Navigation from './components/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      data: false
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({smurfs: response.data});
        this.setState({data: true})
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  addSmurf = smurf => {
    axios.post("http://localhost:3333/smurfs", smurf)
      .then(response => {
        const smurfs = this.state.smurfs;
        smurfs.push(smurf);
        this.setState({smurfs: smurfs});
      })
      .catch(err => {
        throw new Error(err);
      })
  }
  // [x] add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // [] Notice what your map function is looping over and returning inside of Smurfs.
  // [] You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route path="/smurf-form" render={props => (
          <SmurfForm 
            {...props}
            addSmurf={this.addSmurf}
            id={this.state.smurfs.length + 1}
          />
        )}/>

        <Route path="/" exact render={props => (
          <Smurfs
            {...props}
            smurfs={this.state.smurfs}
          />
        )}/>
      </div>
    );
  }
}

export default App;
