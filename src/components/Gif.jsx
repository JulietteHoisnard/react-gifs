/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <img src={src} alt="gif" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
