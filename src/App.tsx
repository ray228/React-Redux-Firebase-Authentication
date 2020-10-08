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
import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCdn5o4VMheenor7J6QkNR4BR5dAe9lwNQ",
  authDomain: "auth-demo-7a39f.firebaseapp.com",
  databaseURL: "https://auth-demo-7a39f.firebaseio.com",
  projectId: "auth-demo-7a39f",
  storageBucket: "auth-demo-7a39f.appspot.com",
  messagingSenderId: "912332528782",
  appId: "1:912332528782:web:b60aee660e906883b77ddf"
};

const App = () => {

  firebase.initializeApp(firebaseConfig)

  //You could probably store this object into the store if that is allowed
  const auth = firebase.auth()

  //What calls would look like
  auth.signInWithEmailAndPassword("dakotamcinnis1@gmail.com", "password").then(response => {
    console.log(response)
  })

  //The info of the current user (might be a json of info)
  console.log(auth.currentUser)

  //Calls firestore
  var docsInCollection = firebase.firestore().collectionGroup('users');
  console.log('docInCollection', docsInCollection)
  docsInCollection.get().then(querySnapshot => {
    const data = querySnapshot.docs.map(doc => doc.data());
    console.log(data); // array of cities objects
  })

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
