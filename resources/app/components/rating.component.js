import React from 'react';

class RatingComponent extends React.Component {

  constructor(props) {
    super(props); // Calls the constructor of the parent class 
    this.IncreaseRating = function (b) {
      this.props.Book.StarRating = this.props.Book.StarRating+1;
      this.props.ChangeRating(this.props.Book); 
    }
  }

  render() {
    return (
      <div>                
        <b>{this.props.Book.StarRating}</b>
        <button onClick={() => this.IncreaseRating()}>+</button>
      </div>
    );
  }

}

export default RatingComponent