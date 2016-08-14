import React from 'react';
import BooklistRowComponent from './booklist.row.component.js';

export default class BooklistComponent extends React.Component {

  constructor(props) {
    super(props); // Calls the constructor of the parent class
    this.state = {
        Books : this.props.Books      
    };
  }

  render() {

      var bookRows = [];
      this.state.Books.map(function (_book) {
          bookRows.push(<BooklistRowComponent key={_book.BookId} Book={_book} />);
      });

    return (
      <div>
        You've currently got <span>{this.state.Books.length} books.</span>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>ISBN</th>
              <th>Price</th>
              <th>Star Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookRows}
          </tbody>
        </table>
      </div>
    );
  }

}