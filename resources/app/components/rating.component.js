import React from 'react';

class RatingComponent extends React.Component {

  constructor(props) {

    let MAX_RATING = 5;
    let MIN_RATING = 0;

    super(props); // Calls the constructor of the parent class
    this.state = {
        StarRating : this.props.StarRating       
    };

    this.IncreaseRating = function (b) {
      let newRating = this.state.StarRating+1;    
      if (newRating > MAX_RATING) {
        newRating = MAX_RATING;
      }
      this.setState({StarRating: newRating}); 
    }

  }

  render() {
    return (
      <div>                
        {this.state.StarRating}
        <button onClick={() => this.IncreaseRating()}>+</button>
      </div>
    );
  }

}

export default RatingComponent