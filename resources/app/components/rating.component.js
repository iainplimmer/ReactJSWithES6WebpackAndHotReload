import React from 'react';

class RatingComponent extends React.Component {

  constructor(props) {

    super(props); // Calls the constructor of the parent class
    this.state = {
        StarRating : this.props.StarRating       
    };

    this.IncreaseRating = function (b) {
      this.setState({StarRating: this.state.StarRating+1}); 
    }

  }

  render() {
    return (
      <div>                
        <b>{this.state.StarRating}</b>
        <button onClick={() => this.IncreaseRating()}>+</button>
      </div>
    );
  }

}

export default RatingComponent