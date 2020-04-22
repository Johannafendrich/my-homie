import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
