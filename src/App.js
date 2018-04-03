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

  componentDidMount() {
    this.fetchBooks();
  }
  
  fetchBooks() {
    BooksAPI.getAll().then((books) => this.setState({
      books: books
    }));
  }

  onShelfUpdate(book, value){
    const newList = this.state.books.filter(bookOnState => bookOnState.id !== book.id);
    book.shelf = value;
    BooksAPI.update(book, value).then(() => this.setState({ books: [...newList, book] }));
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
