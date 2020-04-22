import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route />
      </Switch>
    </Router>
  );
}

export default App;
