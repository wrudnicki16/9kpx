import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Greeting from './nav_bar/greeting';

// if current user exists, render sticky nav with unordered list with prof pic as background.
// otherwise, render nav links + protected route logo.

const Landing = () => {
  return (
    <div className="landing-page">
      <h1>Top 10 Photos</h1>
      {/* <Top10Photos (regularRoute)/> */}
    </div>
  )
}



export default connect(null, null)(Landing);