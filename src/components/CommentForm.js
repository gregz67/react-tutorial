import React, { Component } from 'react';

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: ''
    };
  }

  handleAuthorChange(e) {
    this.setState({
      author: e.target.value
    });
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let author = this.state.author.trim();
    let text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onSubmit({
      author,
      text
    });
    this.setState({
      author: '',
      text: ''
    });
  }

  render() {
    return (
      <form className="commentForm" onSubmit={ this.handleSubmit.bind(this) }>
        <input
          type="text"
          value={ this.state.author }
          onChange={ this.handleAuthorChange.bind(this) }
          placeholder="Your name" />
        <input
          type="text"
          value={ this.state.text }
          onChange={ this.handleTextChange.bind(this) }
          placeholder="Say something..." />
        <input type="submit" value="Post" />
      </form>
    );
  }
}