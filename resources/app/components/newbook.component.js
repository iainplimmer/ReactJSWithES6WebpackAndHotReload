import React from 'react';

class NewBookComponent extends React.Component {
 constructor(props) {
    super(props); // Calls the constructor of the parent class
  }

  render() {

    return (
      <button onClick={() => this.props.CreateBook()}>
        Create Book
      </button>
    );
  }

}

export default NewBookComponent