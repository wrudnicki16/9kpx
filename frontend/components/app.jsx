import React from 'react';
import Landing from './landing';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  // start building nav out.
  render() {
    return (
      <Switch>
        <Route path="/" component={Landing}></Route>
        {/* <Route path="/login" component={SessionForm}></Route> */}
        {/* <Route path="/signup" component={SessionForm}></Route> */}
        {/* <Route path="/photos/new" component={PhotosForm}></Route> */}
        {/* <Route path="/photos/:photoId" component={PhotoShow}></Route> */}
        {/* <Route path="/username" component={UserShow}></Route> */}
      </Switch>
    )
  }
}

export default App;