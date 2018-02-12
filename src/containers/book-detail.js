//Promoting this react component to a container since it cares about a particular piece of state (data)
//Booklist and Book details should be containers or smart compoents, so they can have a direct connection to redux via react-redux library
import React,  { Component } from 'react';
//Import the connect function from react-redux
import { connect } from 'react-redux';
//Import action creator

class BookDetail extends Component {
  render() {

    if (!this.props.book) {
      return <div>Select a book to get started</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

//helper funtion that maps the state to the props of THIS component
function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

//Use THIS BookDetail component and the map function above to return the container
//The goal is to export the container not the actual class
export default connect(mapStateToProps)(BookDetail);