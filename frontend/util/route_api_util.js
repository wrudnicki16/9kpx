import React from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// EXPERIENCE FOR A NON_USER

// Greeting changes based on route - in page flow on splash, otherwise part of a sticky nav.

// Home page:
// make a route that renders the splash page when logged out
// don't redirect to login, just render the splash page instead of the user home page.
// This is how we can get two functionalities for the same route.

// Username pages: 
// either it's the current user's page, or its someone else, render interactable buttons
// accordingly - follow/message or settings modal Link. 
// Follow user is protected (redirect when user not logged in)
// pages aren't really PROTECTED ROUTES, otherwise they'd redirect instantly to /login.
// Instead they just know what to render based on the state of the app, so they will need
// currentUser passed down.

// login/signup
// Auth Routes

// Discovery pages
// all besides /editors, incorporate followers into the general mix if user is logged in
// follow/like buttons are the same but protected (redirect when user not logged in)

// Photo pages:
// Like photo is protected

// Protected Routes:
// 1. /photos/new

// Auth Routes:
// 1. /login
// 2. /signup

const Auth = ({component: Component, path, currentUser, exact}) => {
  return <Route path={path} exact={exact} render={(props) => {
      return (
        !currentUser ? (
        <Component {...props} />
        ) : (
          <Redirect to="/"/> 
        )
      );
    }
  } />;
};

const ProtectedAuth = ({component: Component, path, currentUser, exact}) => {  
  return <Route path={path} exact={exact} render={(props) => {
      return (
        currentUser ? (
          <Component {...props} />
        ) : (         
          <Redirect to="/login" />
        )
      );
    }
  } />;
};

const DualAuth = ({loggedInComponent: LoggedInComponent, 
                  loggedOutComponent: LoggedOutComponent, path, currentUser, exact}) => {
  return <Route path={path} exact={exact} render={(props) => {
      return (
        currentUser ? (
          <LoggedInComponent {...props} />
        ) : (
          <LoggedOutComponent {...props} />
        )
      );
    }
  } />;
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: !!state.session.currentUser
  }
}

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(ProtectedAuth));
export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const DualRoute = withRouter(connect(mapStateToProps, null)(DualAuth))