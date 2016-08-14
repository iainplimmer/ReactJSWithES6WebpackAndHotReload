import React from 'react';
import RatingComponent from './rating.component.js';

export default class BooklistRowComponent extends React.Component {

  constructor(props) {
    super(props); // Calls the constructor of the parent class
    this.state = {
        Book : this.props.Book       
    };
  }

  render() {
    return (
      <tr>
        <td>{this.state.Book.BookName}</td>
        <td>{this.state.Book.ISBN}</td>
        <td>{this.state.Book.Price}</td>
        <td>          
          <RatingComponent StarRating={this.state.Book.StarRating} />
        </td>
      </tr>
    );
  }

}