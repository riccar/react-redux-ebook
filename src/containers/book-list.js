//Containers: To turn a component into container identify the most parent component that care about a particular piece of state (data)
//Booklist and Book details should be containers or smart compoents, so they can have a direct connection to redux via react-redux library
import React,  { Component } from 'react';
//Import the connect function from react-redux
import { connect } from 'react-redux';

class BookList extends Component {

  //helper function to return the books as list items
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
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

//Conenct this component with the container book-list via react-redux
//Param: state. The whole application state and will be shown up as props inside the book-list
//This function is executed every time the state changes
function mapStateToProps(state) {

  //the return value will be saved within the props attribute of this container
  return {
    books: state.books
  };
}

//take BookList component and the map function above and return the container
//The goal is to export the container not the actual class
export default connect(mapStateToProps)(BookList);