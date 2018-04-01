import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import BooksGrid from './BooksGrid'

class Search extends Component {
    state = {
        books: [],
        query: ''
    }

    onQueryUpdate(query) {
        this.setState({
            query: query
        });
        if(query) {
            return BooksAPI.search(query).then((books) => {
                this.setState({
                    books: books.error? []: books,
                });
            });
        }
        this.setState({
            books: []
        });
    }
    
    render() {        
        const { books, query } = this.state;
        const { myBooks, onShelfUpdate } = this.props;
        books.forEach((book) => {
            myBooks.forEach((myBook) => {
                if (myBook.id === book.id) {
                    book.shelf = myBook.shelf
                }
            })
        });
        return (
            <div className="search-books">
            <div className="search-books-bar">
              <Link
                to='/'
                className="close-search"
              >
                Close
              </Link>
              <div className="search-books-input-wrapper">
                <input
                    type="text"
                    value={query}
                    placeholder="Search by title or author"
                    onChange={(e) => { e.preventDefault(); this.onQueryUpdate.bind(this)(e.target.value); }}
                />
              </div>
            </div>
            <div className="search-books-results">
            <BooksGrid books={books} onShelfUpdate={onShelfUpdate} />
            </div>
          </div>
        );
    }
}

Search.propTypes = {
    myBooks: PropTypes.array,
    onShelfUpdate: PropTypes.func
}

Search.defaultProps = {
    myBooks: [],
    onShelfUpdate: () => {}
}

export default Search;