import React, { Component } from 'react';
import CommentBox from './components/CommentBox';

var css = require('./app.css');

export default class App extends Component {
  render() {
    let data = [
      {id: 1, author: "Nathan Longbottom", text: "This is one comment"},
      {id: 2, author: "Libby Miller", text: "This is *another* comment"}
    ];
    return (
      <CommentBox url="http://localhost:8080/api/comments" pollInterval="{2000}"/>
    );
  }
}
