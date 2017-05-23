import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store'
import GenerateJoke from './components/GenerateJoke'
import JokeList from './components/JokeList'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <h1>Chuck Norris Joke Generator</h1>
      <GenerateJoke/>
      <JokeList/>
      </div>
      </Provider>
    );
  }
}

export default App;
