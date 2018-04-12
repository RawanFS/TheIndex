import React, {Component} from 'react';
import axios from 'axios';

import Loading from './Loading';
import BookTable from './BookTable';

function AuthorDetail(props) {
  const authorID = props.match.params.authorID;
  const author = props.authorStore.getAuthorById(authorID);
  return (
    <div className="author col-xs-10">
      <div>
        <h3>{author.first_name} {author.last_name}</h3>
        <img src={author.imageUrl} className="img-thumbnail"/>
      </div>
      <BookTable books={author.books.map(
        bookID => props.bookStore.getBookById(bookID)
      )} />
    </div>
  );
}

export default AuthorDetail;
