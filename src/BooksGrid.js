import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const BooksGrid = (props) => {
    const { books, onShelfUpdate } = props;

    return (
        <ol className="books-grid">
            { books.map((book) => (
            <li key={book.id}>
                <Book
                    title={book.title}
                    authors={book.authors}
                    thumbnailUrl={book.imageLinks? book.imageLinks.thumbnail : ''}
                    shelf={book.shelf}
                    onShelfUpdate={(value) => onShelfUpdate(book, value)}
                />
            </li>
            )) }
        </ol>
    );
}

BooksGrid.propTypes = {
    books: PropTypes.array,
    onShelfUpdate: PropTypes.func
}

BooksGrid.defaultProps = {
    books: [],
    onShelfUpdate: () => {}
}

export default BooksGrid;