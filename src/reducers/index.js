import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  //Map BookReducer return value with they books state key
  books: BooksReducer
});

export default rootReducer;
