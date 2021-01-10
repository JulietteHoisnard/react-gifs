/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

const GIPHY_API_KEY = 'YuYUvitdUqVdn4ymKswisqQpOEJMWfDQ';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [{ id: "xT9IgDEI1iZyb2wqo8" }, { id: "26FLdmIp6wJr91JAI" }, { id: "3osxYk9qClrQVXVfiw" }, { id: "lTtlee2yqTevu" }],
      id: "xT9IgDEI1iZyb2wqo8"
    };

    this.selectGif = this.selectGif.bind(this);
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (error, result) => {
        this.setState({
          gifs: result.data
        });
      });
  }

  selectGif = (newSelectedGifId) => {
    this.setState({
      id: newSelectedGifId
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.id} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
