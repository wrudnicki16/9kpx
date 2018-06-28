import React from 'react'
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Link, withRouter } from 'react-router-dom';


class Greeting extends React.Component {
  render() {
    let logoutAction = () => this.props.dispatch(logout());
    let currentUser = this.props.currentUser;

    let path = this.props.location.pathname;
    debugger
    return currentUser ? (
      // later make this just 1 of 2 <li>'s, that and upload, with each section of links a <ul>. 
      <ul>
        <li><Link to="/username">My Profile</Link></li>
        {/* <li><Link onClick={() => logoutAction()} to="/liked">My Liked Photos</Link></li> */}
        <li><Link to="/signout" onClick={() => logoutAction()}>Sign out</Link></li>
      </ul>
    ) : path === "/login" ? (
      <div className="nav-greeting">
        <Link to="/signup">Sign up</Link>
      </div>
    ) : path === "/signup" ? (
      <div className="nav-greeting">
        <Link to="/login">Login</Link>
      </div>
    ) : (
      <div className="nav-greeting">
        <Link to="/signup">Sign up</Link>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser
  }
}



export default withRouter(connect(mapStateToProps, null)(Greeting));
