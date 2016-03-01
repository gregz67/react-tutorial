import React, { Component } from 'react';
import $ from 'jquery';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

export default class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  getComments() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: (data) => this.setState({ data }),
      error: (xhr, status, err) => console.error(this.props.url, status, err.toString())
    });
  }

  handleSubmit(comment) {
    let comments = this.state.data;
    comment.id = Date.now();
    let newComments = comments.concat([comment]);
    this.setState({
      data: newComments
    });
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: (data) => this.setState({ data }),
      error: (xhr, status, err) => {
        this.setState({ data: comments });
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  componentDidMount() {
    this.getComments();
    //setInterval(this.getComments.bind(this), this.props.pollInterval);
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={ this.state.data }/>
        <CommentForm onSubmit={ this.handleSubmit.bind(this) }/>
      </div>
    );
  }
}