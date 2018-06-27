import React from 'react';
import Landing from './landing';
import SessionFormContainer from './session/session_form_container';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  // start building nav out.
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route path="/login" component={SessionFormContainer}></Route>
        <Route path="/signup" component={SessionFormContainer}></Route>
        {/* <Route path="/photos/new" component={PhotosForm}></Route> */}
        {/* <Route path="/photos/:photoId" component={PhotoShow}></Route> */}
        {/* <Route path="/username" component={UserShow}></Route> */}
        {/* <Route path="/liked" component={LikedShow}></Route> */}
      </Switch>
    )
  }
}

export default App;