import React from 'react';
import BooklistRowComponent from './booklist.row.component.js';
import NewBookComponent from './newbook.component.js';
import AverageRatingComponent from './averagerating.component.js';

class BooklistComponent extends React.Component {

  constructor(props) {
    super(props); // Calls the constructor of the parent class
    this.state = {
        Books : this.props.Books      
    };
  }

  _handleChange (a) {

    let newbook = {
        "BookId": 105,
        "BookName": "Harry Potter and the Deathly Hallows",
        "ISBN": "isbn-23432-23-12-2",
        "ReleaseDate": "December 23, 2016",
        "Price": 2.99,
        "StarRating": 4
    }
    
    this.setState({
      Books : this.state.Books.concat([newbook])  
    });

  }

  render() {
    var bookRows = [];
    this.state.Books.map(function (_book) {
        bookRows.push(<BooklistRowComponent key={_book.BookId} Book={_book} />);
    });

    return (
      <div>
        
        <p>You've currently got <span>{this.state.Books.length} books.</span></p>
        
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>ISBN</th>
              <th>Price</th>
              <th>Star Rating</th>
            </tr>
          </thead>
          <tbody>
            {bookRows}
          </tbody>
        </table>

        <AverageRatingComponent />

        <NewBookComponent clickMe={this._handleChange.bind(this)} />
      </div>
    );
  }

}

export default BooklistComponent;