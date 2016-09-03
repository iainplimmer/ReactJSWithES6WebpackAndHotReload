import React from 'react';
import BooklistRowComponent from './booklist.row.component.js';
import NewBookComponent from './newbook.component.js';
import AverageRatingComponent from './averagerating.component.js';
import axios from 'axios';

class BooklistComponent extends React.Component {



  constructor(props) {
      super(props); // Calls the constructor of the parent class
      this.state = {
          Books : [],
          AverageRating: 0      
      }; // Equiv of getInitialState

      this.ChangeRating = this.ChangeRating.bind(this);

      let self = this;
      axios.get('http://localhost:3333/')
      .then(function (response) {
          let averageRating = self.CalculateAverageRating(response.data);
          self.setState({
            Books : response.data,
            AverageRating : averageRating
          });        

      });

  }

  CalculateAverageRating (books) {
      let totalRating = 0;
      books.map(function (item){
          totalRating = totalRating + item.StarRating;
      })
      return totalRating / books.length;
  }

  ChangeRating (book) {   
    let averageRating = this.CalculateAverageRating(this.state.Books)
    this.setState({
      Books : this.state.Books,
      AverageRating : averageRating
    });    
    
  }

  CreateBook (a) {

    let allBooks = this.state.Books.concat({ "BookId": 105, "BookName": "Life", "ISBN": "isbn-12457-87-56-4", "ReleaseDate": "December 25, 2002", "Price": 1.99, "StarRating": 1 })
    let averageRating = this.CalculateAverageRating(allBooks)

    //  Let's add an example book here. It seems that you can only set state ONCE on the function, and it's not applied until the 
    //  whole state has been rendered to the page 
    this.setState({
      Books : allBooks,
      AverageRating : averageRating  
    });
    
  }

  render() {
    var bookRows = [];
    var self = this;
    self.state.Books.map(function (_book) {
        bookRows.push(<BooklistRowComponent ChangeRating={self.ChangeRating.bind(this)} key={_book.BookId} Book={_book} />);
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

        <AverageRatingComponent AverageRating={this.state.AverageRating} />

        <NewBookComponent CreateBook={this.CreateBook.bind(this)} />
      </div>
    );
  }

}

export default BooklistComponent;