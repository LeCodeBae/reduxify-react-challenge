import { ADD_JOKE } from './constants'
import axios from 'axios';

export const addJokeSuccess = joke => ({
  type: ADD_JOKE,
  joke,
});

export const addJoke = () => {
  return (dispatch) => {
  axios.get('https://api.icndb.com/jokes/random')
  .then((response)=>{
    dispatch(addJokeSuccess(response.data.value.joke))
  }).catch((err)=>{
    console.log(err);
  })
  }
}