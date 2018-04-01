import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BooksGrid from './BooksGrid';

const BookShelf = (props) => {
    const { onShelfUpdate, books } = props;
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                    <BooksGrid books={books.filter((book) => book.shelf === 'currentlyReading')} onShelfUpdate={onShelfUpdate} />
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                    <BooksGrid books={books.filter((book) => book.shelf === 'wantToRead')} onShelfUpdate={onShelfUpdate}/>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                    <BooksGrid books={books.filter((book) => book.shelf === 'read')} onShelfUpdate={onShelfUpdate}/>
                    </div>
                </div>
                </div>
            </div>
            <div className="open-search">
                <Link
                    to='/search'
                >
                Add a book
                </Link>
            </div>
        </div>
    );
}

BookShelf.propTypes = {
    books: PropTypes.array,
    onShelfUpdate: PropTypes.func
}

BookShelf.defaultProps = {
    books: [],
    onShelfUpdate: () => {}
}

export default BookShelf;