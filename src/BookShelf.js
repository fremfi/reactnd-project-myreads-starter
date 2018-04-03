import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookShelfRow from './BookShelfRow';

const BookShelf = (props) => {
    const { onShelfUpdate, books } = props;
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelfRow
                    title="Currently Reading"
                    books={books.filter((book) => book.shelf === 'currentlyReading')} 
                    onShelfUpdate={onShelfUpdate}
                />
                <BookShelfRow
                    title="Want to Read"
                    books={books.filter((book) => book.shelf === 'wantToRead')} 
                    onShelfUpdate={onShelfUpdate}
                />
                <BookShelfRow
                    title="Read"
                    books={books.filter((book) => book.shelf === 'read')} 
                    onShelfUpdate={onShelfUpdate}
                />
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