import React, {Component } from 'react';

class Home extends Component {
render() {
  return (
      <div className="home">

      <video id="background-video" loop autoPlay>
		    <source src={require("../static/img/background-movie3.mp4")} type="video/mp4" />
		    Your browser does not support the video tag.
		</video>

      </div>
    );
  }
}

export default Home;