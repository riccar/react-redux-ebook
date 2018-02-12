//Promoting this react component to a container since it cares about a particular piece of state (data)
//Booklist and Book details should be containers or smart compoents, so they can have a direct connection to redux via react-redux library
import React,  { Component } from 'react';
//Import the connect function from react-redux
import { connect } from 'react-redux';
//Import action creator

export default class BookDetail extends Component {
  render()     {
    return (
      <div>Book Detail!</div>
    );
  }
}