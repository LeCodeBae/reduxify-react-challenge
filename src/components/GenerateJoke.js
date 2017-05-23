import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'

class GenerateJoke extends Component {
  createJoke() {
    let that = this
    axios.get('https://api.icndb.com/jokes/random')
    .then((response)=>{
      that.props.addJoke(response.data.value.joke)
      console.log(response.data.value.joke)
    }).catch((err)=>{
      console.log(err);
    })  
  }
  render() {
    return(
      <button onClick={()=>{this.createJoke()}}>Generate</button>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return ({
    addJoke: (joke) => {
      return dispatch({
        type: 'ADD_JOKE',
        joke
      })
    }
  })
}

export default connect(null, mapDispatchToProps)(GenerateJoke)