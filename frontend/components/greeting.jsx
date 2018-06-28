import React from 'react'
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { Link } from 'react-router-dom';


class Greeting extends React.Component {
  render() {
    debugger;
    let logoutAction = () => this.props.dispatch(logout());
    let currentUser = this.props.currentUser;
    
    return currentUser ? (
      // <div className="nav-greeting">
      //   <Link onClick={() => logoutAction()} to="/logout">Sign in</Link>
      //   <p>Hi, {`${currentUser.username}`}</p>
      //   <button onClick={() => logoutAction()}>Sign out</button>
      // </div>

      // ^ just for reference
      <ul>
        <li><Link onClick={() => logoutAction()} to="/logout">Sign out</Link></li>
        <li><Link onClick={() => logoutAction()} to="/username">My Profile</Link></li>
        {/* <li><Link onClick={() => logoutAction()} to="/liked">My Liked Photos</Link></li> */}
      </ul>
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



export default connect(mapStateToProps, null)(Greeting);
