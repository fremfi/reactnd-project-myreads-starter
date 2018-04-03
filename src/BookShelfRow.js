import React from 'react';
import BooksGrid from './BooksGrid';

const BookShelfRow = (props) => {
    const { title, books, onShelfUpdate } = props;
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
            <BooksGrid books={books} onShelfUpdate={onShelfUpdate} />
            </div>
        </div>
    );
};

export default BookShelfRow;