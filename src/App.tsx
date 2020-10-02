import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateReactAppScreen from './screens/CreateReactAppScreen';
import Login from './screens/Login';
import styled from 'styled-components';

const App = () => {


  
  return (
    <Router>
      <NavBar>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/Login">Login</NavItem>
      </NavBar>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/">
          <CreateReactAppScreen />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  background: black;
`;

const NavItem = styled(Link)`
  margin: 0px 10px 10px 10px;
  color: rgb(112, 76, 182);;
  font-size: 30px;
  font-weight: bold;
`;
