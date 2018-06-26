import React from 'react';
import Landing from './landing';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  // start building nav out.
  render() {
    return (
      <Switch>
        <Route path="/" component={Landing}></Route>
      </Switch>
    )
  }
}

export default App;