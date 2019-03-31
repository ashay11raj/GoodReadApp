import React from 'react';

const detailedBook = (props) => {
    console.log("detailedBook: " + props);
    return (
        <div className="book-detail">
            <table>
                <tr>
                    <td>
                        <img src={props.bookDetails.img} height="300" width="250"></img>
                    </td>
                    <td>
                        <tr>
                            <b>Book Title: </b> {props.bookDetails.title}                                            
                        </tr>                        
                        <tr>
                            <b>Author: </b> {props.bookDetails.author}            
                        </tr>
                        <tr>
                            <b>Rating: </b> {props.bookDetails.ratings}            
                        </tr>
                        <tr>
                            <b>Description: </b> {props.bookDetails.description}            
                        </tr>
                    </td>                
                </tr>
            </table>
                        
        </div>        
    )
};
export default detailedBook;