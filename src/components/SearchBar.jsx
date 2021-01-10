import React, { Component } from 'react';

class SearchBar extends Component {
  handleSearch = (e) => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.searchFunction(e.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        onChange={this.handleSearch}
      />
    );
  }
}

export default SearchBar;
