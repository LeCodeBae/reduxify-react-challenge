const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_JOKE':
      var newJoke = {
        joke: action.joke
      }
      if(state.length === 0){
        newJoke.id = 1
      } else {
        newJoke.id = state[state.length-1].id + 1
      }
      return [...state, newJoke]
    default:
      return state
  }
}

export default reducer