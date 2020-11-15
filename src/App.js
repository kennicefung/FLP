import React from 'react';
import Container from 'react-bootstrap/Container'
import MainNavBar from './components/MainNavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PlanningPage from './pages/PlanningPage';

function App() {
  return (
    <Router>
      <MainNavBar/>
      <Switch>
          <Route path={"/Planning"} component={PlanningPage}/>
      </Switch>
    </Router>
  );
}

export default App;
