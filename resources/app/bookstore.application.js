import React from 'react';
import {render} from 'react-dom';
import BooklistComponent from './components/booklist.component.js';
import Books from './data/books.js';

export default class BookstoreApp extends React.Component {
  render () {
    return <div>
        <h1>Welcome to the bookstore</h1>
        <p>Have a look at some of the books that we have here.</p> 
        <BooklistComponent Books={Books} />
      </div>;
  }
} 

render(<BookstoreApp />, document.getElementById('BookstoreApp'));