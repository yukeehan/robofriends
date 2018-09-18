import { CHANGE_SEARCH_FIELD } from './constants.js';

const initialState = {
  searchField:''
}

// create the reducer it should be a pure function
export const searchRobots = (state=initialState, action={}) =>{
  switch(action.type){ //different action
    case CHANGE_SEARCH_FIELD:
      return  Object.assign({}, state, {searchField: action.payload}); // like setState
    default:
      return state;
  }
}
