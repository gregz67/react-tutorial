import React, { Component } from 'react';
import marked from 'marked';

export default class Comment extends Component {
  rawMarkup(m) {
    return { __html: marked(m, { sanitize: true }) };
  }
  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          { this.props.author }
        </h2>
        <span dangerouslySetInnerHTML={ this.rawMarkup(this.props.children.toString()) } />
      </div>
    );
  }
}