import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react';

import Loading from './Loading';
import SearchBar from './SearchBar';
import BookTable from './BookTable';

function BookList(props) {
  const bookColor = props.match.params.bookColor;
  const books = bookColor ?
                props.bookStore.getBooksByColor(bookColor) :
                props.bookStore.filteredBooks;
  return (
    <div className="books">
      <h3>Books</h3>
      <SearchBar store={props.bookStore}/>
      {bookColor &&
        <Link to="/books">
          <button className="btn">All Books</button>
        </Link>}
      <BookTable books={books} />
    </div>
  );
}

export default observer(BookList);
