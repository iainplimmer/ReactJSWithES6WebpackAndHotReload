import React from 'react';

class AverageRatingComponent extends React.Component {
 constructor(props) {
    super(props); // Calls the constructor of the parent class
  }

  render() {

    return (
      <div>Average Rating: {this.props.AverageRating}</div>
    );
  }

}

export default AverageRatingComponent