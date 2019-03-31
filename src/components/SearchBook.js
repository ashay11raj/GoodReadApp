import React from 'react';
import axios from 'axios';
import {
    parseString
} from 'xml2js';
import BookList from './BookList';
import DetailedBook from './DetailedBook';

const PROXY_SERVER = "https://cors-anywhere.herokuapp.com/";
const SUMMARY_SEARCH_URL = "https://www.goodreads.com/search/index.xml";
const DETAILED_SEARCH_URL = "https://www.goodreads.com/book/show/";
const GOOD_READ_API_KEY = "3il0QOZERbgGbTyB16Vbxw";

const getListOfBooks = query => {
    return axios
        .get(`${PROXY_SERVER}${SUMMARY_SEARCH_URL}?key=${GOOD_READ_API_KEY}&q=${query}&format=json`)
        .then(response => response)
}
const getBookDetails = query => {
    return axios
        .get(`${PROXY_SERVER}${DETAILED_SEARCH_URL}${query}.xml?key=${GOOD_READ_API_KEY}`)
        .then(response => response);
}

class SearchBook extends React.Component {
    state = {
        selectedBookId: "",
        listOfBooks: []
    }
    getBookList = (input) => {
        this.setState((state, props) => ({
            showLoading: true
        }));
        getListOfBooks(input.current.value).then((resp) =>
            parseString(
                resp.data,
                (err, result) => {
                    console.log(result);
                    this.setState((state, props) => ({
                        listOfBooks: result.GoodreadsResponse.search[0].results[0].work,
                        showLoading: false
                    })
                    );                    
                }
            )
        )
    }
    getSelectedBookDetails = (bookId)=>{
        this.setState((state, props) => ({
            showLoading: true
        }));
        getBookDetails(bookId).then(resp =>
            parseString(
                resp.data,
                (err, result) => {
                    let authors = [];
                    let authorID = [];
                    result.GoodreadsResponse.book[0].authors.forEach(author => {
                        authorID.push(author.author[0].id[0]);
                        authors.push(author.author[0].name[0]);
                    });
                    const bookDetails = {
                        author: result.GoodreadsResponse.book[0].authors[0].author[0].name[0],
                        title: result.GoodreadsResponse.book[0].title[0],
                        img: result.GoodreadsResponse.book[0].image_url[0],
                        ratings: result.GoodreadsResponse.book[0].average_rating[0],
                        description: result.GoodreadsResponse.book[0].description[0].replace(/\<br \/>/g, "\n").replace(/<b>/g, "").replace(/<\/br>/g, "").replace(/<\/b>/g, "")
                    }
                    this.setState((state, props) => ({
                        bookDetails: bookDetails,
                        showLoading: false
                    })
                    );
                }
            )
        );
        
    }
    render() {
        let input = React.createRef();
        let bookList, bookDetails;
        if(this.state.listOfBooks.length > 0){
            bookList = <BookList listOfBooks={this.state.listOfBooks} getSelectedBookDetails={this.getSelectedBookDetails} />;
        }
        if(this.state.bookDetails){
            bookDetails = <DetailedBook bookDetails={this.state.bookDetails}/>;
        }
        let loadingDiv;
        if(this.state.showLoading){
            loadingDiv = <img src="827.gif"></img>;
        }
        return (
            <div>
                <div className="loading">
                    {loadingDiv}
                </div>

                <div className="search-input">
                    Read Books: 
                    <input 
                        placeholder="Please Search book here..." ref={input} />
                    <button className="search-btn" onClick={() => this.getBookList(input)}>Search Book</button>
                </div>
                <div className="search-results">
                    {bookList}
                </div>
                <div className="book-details">
                    {bookDetails}
                </div>                
            </div>
        );
    }
    
}

export default SearchBook;