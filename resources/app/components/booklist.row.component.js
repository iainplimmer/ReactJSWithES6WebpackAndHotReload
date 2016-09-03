import React from 'react';
import RatingComponent from './rating.component.js';

export default class BooklistRowComponent extends React.Component {

  constructor(props) {
    super(props); // Calls the constructor of the parent class




  }

  render() {
    return (
      <tr>
        <td>{this.props.Book.BookName}</td>
        <td>{this.props.Book.ISBN}</td>
        <td>{this.props.Book.Price}</td> 
        <td>          
          <RatingComponent ChangeRating={this.props.ChangeRating} Book={this.props.Book} />
        </td>
      </tr>
    );
  }

}