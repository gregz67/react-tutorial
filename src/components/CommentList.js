import React, { Component }  from 'react';
import Comment from './Comment';

export default class CommentList extends Component {
  render() {
    let comments = this.props.data.map((comment) => {
      return (
        <Comment author={ comment.author } key={ comment.id }>
          { comment.text }
        </Comment>
      );
    });
    return (
      <div className="commentList">
        { comments }
      </div>
    )
  }
}