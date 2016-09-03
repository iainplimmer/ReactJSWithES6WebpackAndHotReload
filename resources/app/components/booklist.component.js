import React from 'react';
import BooklistRowComponent from './booklist.row.component.js';
import NewBookComponent from './newbook.component.js';
import AverageRatingComponent from './averagerating.component.js';
import axios from 'axios';

class BooklistComponent extends React.Component {

  constructor(props) {
      super(props); // Calls the constructor of the parent class
      this.state = {
          Books : []      
      }; // Equiv of getInitialState

      let self = this;

      axios.get('http://localhost:3333/')
      .then(function (response) {
          self.setState({
            Books : response.data
          });
      });

  }

  _handleChange (a) {
    //  Let's add an example book here.   
    this.setState({
      Books : this.state.Books.concat({ "BookId": 105, "BookName": "Life", "ISBN": "isbn-12457-87-56-4", "ReleaseDate": "December 25, 2002", "Price": 1.99, "StarRating": 1 })  
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