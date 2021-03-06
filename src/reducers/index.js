import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//Any key added to the conbinedReducer ends up
//as key at the app global state
//Every piece of application state can be accessed via the keys defined below
const rootReducer = combineReducers({
  //Map returned values with they state key
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
