import React from 'react';

export default class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props); // Calls the constructor of the parent class
    this.state = {
        likesCount : 0        
    };
    this.onLike = this.onLike.bind(this);
    this.onDislike = this.onDislike.bind(this);

    this.props.Books.map(function (c){
      console.log(c.StarRating, c.BookName, c.BookId);
    });
  }

  onDislike () {
    let newLikesCount = this.state.likesCount - 1;
    this.setState({likesCount: newLikesCount});
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div>
        You've currently got <span>{this.state.likesCount} likes.</span>
        <button onClick={this.onLike}>Like</button>
        <button onClick={this.onDislike}>Dislike</button>
      </div>
    );
  }

}