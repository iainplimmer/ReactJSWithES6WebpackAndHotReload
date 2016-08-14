import React from 'react';

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
        <td>{this.state.Book.StarRating}</td>
        <td>
          SPARE COLUMN
        </td>
      </tr>
    );
  }

}