import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from './enzyme';
import SearchBook from './components/SearchBook';

test('extractBookDetails', () => {
  let result = {
    GoodreadsResponse: {
      book: [
        {
          authors: [{
            author: [{
              name:["author1"]
            }]
          }],
          title: ["test title"],
          image_url: ["url"],
          average_rating: ["5"],
          description: ["description"]
        }
      ]
    }
  };
  const wrapper = shallow(<SearchBook />);
  const instance = wrapper.instance();  
  let bookDetails = instance.extractBookDetails(result);
  expect(bookDetails.title).toBe("test title");
});
