import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleChange(e) {
    e.preventDefault();
  }

  handleSubmit(e) {
    debugger;
    e.preventDefault();
    let user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  header() {
    if (this.props.formType === 'login') {
      return <h1>Log in to 9kpx</h1>;
    } else {
      return <h1>Join 9kpx</h1>;
    }
  }

  navLink() {
    if (this.props.formType === "login") {
      return <p>Not signed up? <Link onClick={this.props.clearErrors} to="/signup">Sign up</Link></p>
    } else {
      return <p>Already a user? <Link onClick={this.props.clearErrors} to="/login">Login</Link></p>
    }
  }

  renderErrors() {
    return this.props.errors.map(error => {

    })

  }

  render() {
    let { location, loggedIn, formType } = this.props;
    let path = location.pathname;
    if (loggedIn) {
      path.replace("/");
    } else {
      return (
        <form onSubmit={(e) => this.handleSubmit(e)} className="login-form">
          { this.renderErrors() }
          { this.header() }
          <input type="text"
            onChange={(e) => this.handleChange(e)}
            value={this.state.username} 
            placeholder="Username"
            className="login-input"
            autoFocus/>
          <input type="password"
            onChange={(e) => this.handleChange(e)}
            value={this.state.password}
            placeholder="Password"
            className="login-input"/>
          <div className="login-buttons">
             <input type="submit"
              onClick={(e) => this.handleSubmit(e)}
              value={formType.charAt(0).toUpperCase() + formType.slice(1)}
              />
          </div>
          {this.navLink()}
        </form>
      );
    }
  }
}

export default SessionForm;