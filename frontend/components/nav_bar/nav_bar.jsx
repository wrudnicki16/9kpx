import React from 'react';
import Greeting from './greeting';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
      <div className="landing-nav">
        <Link to="/"><h1>9kpx</h1></Link>
        {/* <Link to="/discovery"> */}
        <Greeting />
      </div>
  )
}

export default NavBar;