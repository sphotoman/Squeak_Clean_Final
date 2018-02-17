import React, {Component } from 'react';
import {Link} from 'react-router-dom';

class Packages extends Component {
render() {
  return (
      <div className="packages page">
        <h1> Our Packages </h1>

        <div className="box">
        <h3>Squeaky Clean </h3>
  			<p>Exterior only wash, clear coat shine, clear coat protectant, and underbody wash.  </p>
  			<p> $25 </p>
            <Link to='/schedule'> Schedule Your Squeaky Clean Wash! </Link>
        </div>

        <div className="box">
        <h3>Squeaky Deluxe </h3>
        <p> Full service wash, clear coat shine, clear coat protectant, underbody wash, tire shine and rim cleaning. </p>
        <p> $50 </p>
            <Link to='/schedule'> Schedule Your Squeaky Clean Wash! </Link>
        </div>

        <div className="box">
        <h3>Squeaky Ultimate </h3>
        <p>Full service wash, mat shampoo, clear coat protectant,  clear coat shine, coat protectant, underbody wash, tire shine, rim cleaning, polish wax, interior fragrance  .</p>
        <p>$100</p>
            <Link to='/schedule'> Schedule Your Squeaky Clean Wash! </Link>
        </div>		

      </div>
    );
  }
}

export default Packages;