import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
    const { title, authors, thumbnailUrl, shelf, onShelfUpdate } = props;

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${thumbnailUrl})` }}></div>
                <div className="book-shelf-changer">
                <select onChange={(event)=> onShelfUpdate(event.target.value)} value={shelf}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors}</div>
        </div>
    )
};

Book.propTypes = {
    title: PropTypes.string,
    authors: PropTypes.array,
    thubnailUrl: PropTypes.string,
    shelf: PropTypes.oneOf(['currentlyReading', 'wantToRead', 'read', 'none']),
    onShelfUpdate: PropTypes.func
}

Book.defaultProps = {
    title: '',
    authors: [],
    thubnailUrl: '',
    shelf: 'none',
    onShelfUpdate: () => {}
}
export default Book;


