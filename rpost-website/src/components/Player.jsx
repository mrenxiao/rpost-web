import React, { Component } from 'react';

import ReactPlayer from 'react-player'

class Player extends Component {
  render() {
    return (
      <ReactPlayer 
      className="container" 
      url='http://repostapp.com/vid/repost-iphone.mp4' 
      playing
      loop
      width="360px"
      height="640px" />
    );
  }
}

export default Player