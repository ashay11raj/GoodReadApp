import React from 'react';
import SummaryBook from './SummaryBook';

const bookList = (props) => {
    return (
        <div className="book-list">
            {props.listOfBooks.map((book, index) => {
                return <SummaryBook book={book} getSelectedBookDetails={props.getSelectedBookDetails}/>
            })
            }
                        
        </div>        
    )
};
export default bookList;