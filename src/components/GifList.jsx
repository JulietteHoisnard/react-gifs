/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Gif from './Gif';

const GifList = props => (
  <div className="gif-list">
    {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />)}
  </div>
);

export default GifList;
