import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Start from './pages/Start';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import ProfilePage from './pages/Profile';
import Main from './components/Main';
import Welcome from './pages/Welcome';
import CreateAccount from './pages/CreateAccount';
import AvatarProvider from './utils/context/AvatarProvider';

function App() {
  return (
    <AvatarProvider>
      <Router>
        <GlobalStyles />
        <Main>
          <Switch>
            <Route exact path="/">
              <Start />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/signUp">
              <SignUp />
            </Route>
            <Route path="/welcome">
              <Welcome />
            </Route>
            <Route path="/createAccount">
              <CreateAccount />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/profile">
              <ProfilePage />
            </Route>
          </Switch>
        </Main>
      </Router>
    </AvatarProvider>
  );
}

export default App;
