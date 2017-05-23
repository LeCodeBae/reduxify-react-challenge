import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addJoke } from '../actions'

class GenerateJoke extends Component {
  createJoke() {
    this.props.addJoke();
  }
  render() {
    return(
      <button onClick={()=>{this.createJoke()}}>Generate</button>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return ({
    addJoke: () => {
      return dispatch(addJoke())
    }
  })
}

export default connect(null, mapDispatchToProps)(GenerateJoke)