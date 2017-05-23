import React, { Component } from 'react';
import { connect } from 'react-redux'

class JokeList extends Component {
  render() {
    return(
      <ul>
      {this.props.jokes.map(joke => <li key={joke.id}>{joke.joke}</li>)}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    jokes: state
  }
}

export default connect(mapStateToProps, null)(JokeList)