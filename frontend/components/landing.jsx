import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Greeting from './greeting';

// if current user exists, render sticky nav with unordered list with prof pic as background.
// otherwise, render nav links + protected route logo.

const Landing = () => {
  return (
    <div className="landing-nav">
      <Link to="/"><h1>9kpx</h1></Link>
      {/* <Link to="/discovery"> */}
      <Greeting />
    </div>
  )
}



export default connect(null, null)(Landing);