import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
render() {
  return (
      <header>
		<Link to='/'><img src={require("../static/img/duckLogo50x99.png")} alt="logo"/></Link>
		<Link to='/'> Home </Link>
	    <Link to='/packages'> Packages </Link>
	    <Link to='/schedule'> Schedule </Link>
	    <Link to='/tech'> Technician </Link>
	    <Link to='/contact'> Contact </Link>

      </header>
    );
  }
}

export default Header;