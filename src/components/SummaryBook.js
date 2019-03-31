import React from 'react';


const summaryBook = (props) => {
    return (
        <div key={props.book.id[0]["_"]} className="summary-book" onClick={() => props.getSelectedBookDetails(props.book.id[0]["_"])}>
            <table>
                <tr>
                    <td>
                        <img src={props.book.best_book[0].image_url[0]} height="80" width="80"></img>
                    </td>
                    <td>
                        <tr>
                            <b>Book Title: </b> {props.book.best_book[0].title[0]}                                            
                        </tr>
                        <tr>
                            <b>Author: </b> {props.book.best_book[0].author[0].name[0]}            
                        </tr>
                        <tr>
                            <b>Rating: </b> {props.book.average_rating[0]}            
                        </tr>
                    </td>                
                </tr>
            </table>
        </div>
    );
};
export default summaryBook;