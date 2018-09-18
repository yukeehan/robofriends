import { CHANGE_SEARCH_FIELD } from './constants.js';

export const setSearchField = ( inputText ) => {
  return{ // take user type input and return an obj
  // return object
  type: CHANGE_SEARCH_FIELD,// it's a constant
  payload: inputText // payload is a common name and it's the data that send to the reducer(function) which
  // is what the user type in
}}
