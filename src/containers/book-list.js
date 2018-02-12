//Containers: To turn a component into container identify the most parent component that care about a particular piece of state (data)
//Booklist and Book details should be containers or smart compoents, so they can have a direct connection to redux via react-redux library
import React,  { Component } from 'react';
//Import the connect function from react-redux
import { connect } from 'react-redux';
//Import action creator
import { selectBook } from '../actions/index';
//Import bindActionCreators from redux to ensure the action generated flows to all the reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {

  //helper function to return the books as list items
  //onClick: Whenever the item is clicked, call the selectBook function 
  //with the list of books. 
  //props.books.map allows to loop through all the books within props
  //On every loop, execute the funtion that returns a <li> item.
  //This function receives the current book in the loop and prints its values within the <li>
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li 
          key={book.title} 
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

//Connect this component with the container book-list via react-redux
//Param: state. The whole application state and will be shown up as props inside the BookList container
//This function is executed every time the state changes
function mapStateToProps(state) {

  //the return value will be saved within the props attribute of this container
  return {
    books: state.books
  };
}

//Anything returned from this function will end up as props
//on the BookList container
function mapDispatchToProps(dispatch) {
  //Whenever select book is called, result should be passed
  //to all of our reducers
  //The first selectBook: is the key and the second is the function (action) imported into this file
  //dispatch is the function that flows the object returned by the function to
  //all the reducers 
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

//take BookList component and the map function above and return the container
//The goal is to export the container not the actual class
//Promote BookList form a componer to a container - It needs to know
//about this new dispatch method, selectBook. Make it available 
//as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);