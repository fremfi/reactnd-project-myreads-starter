import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import Search from './Search';
import BookShelf from './BookShelf';

class BooksApp extends React.Component {
  state = {
    books:[]
  }

  componentWillMount() {
    this.fetchBooks();
  }
  
  fetchBooks() {
    BooksAPI.getAll().then((books) => this.setState({
      books: books
    }));
  }

  onShelfUpdate(book, value) {
    const { books } = this.state;
    let foundIndex = books.findIndex(x => x.id === book.id);
    if (foundIndex > 0) { // If book is already on the shelf
      books[foundIndex].shelf = value;
    } else {
      book.shelf = value;
      books.push(book);
    }
    this.setState({
      books: books
    });
    BooksAPI.update(book, value);
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route path="/search" render={() => (
            <Search myBooks={books} onShelfUpdate={this.onShelfUpdate.bind(this)}/>
          )} />
        <Route exact path="/" render={() => (
          <BookShelf books={books} onShelfUpdate={this.onShelfUpdate.bind(this)} />
        )} />
      </div>
    )
  }
}

export default BooksApp
