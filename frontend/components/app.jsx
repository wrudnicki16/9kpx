import React from 'react';
import LandingPhotos from './landing_photos';
import HomeFeed from './home_feed';
import NavBar from './nav_bar/nav_bar';
import SessionFormContainer from './session/session_form_container';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, DualRoute } from '../util/route_api_util';

class App extends React.Component {
  // start building nav out.
  render() {
    return (
      <div className="app">
        <Route path="/" component={NavBar}></Route>
        <Switch>
          <AuthRoute path="/login" component={SessionFormContainer}></AuthRoute>
          <AuthRoute path="/signup" component={SessionFormContainer}></AuthRoute>
          {/* <ProtectedRoute path="/photos/new" component={PhotosForm}></ProtectedRoute> */}
          {/* <Route path="/photos/:photoId" component={PhotoShow}></Route> */}
          {/* <Route path="/username" component={UserShow}></Route> */}
          {/* <Route path="/liked" component={LikedShow}></Route> */}
          <DualRoute path="/" loggedInComponent={HomeFeed} 
                              loggedOutComponent={LandingPhotos}/>
        </Switch>
      </div>
    )
  }
}

export default App;