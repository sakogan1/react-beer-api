import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Main from "./components/Main"
import Navbar from "./components/Navbar"
import Details from './components/Details';
import Beer from './components/Beer';
import Random from './components/Random';




function App() {

  
    
  return (
    <Router>
    
    <Route exact path="/" > 
    <Beer/>   
    </Route>
    <Route path="/main" component={Main} />
  
    <Route path="/details/:Id" component={Details} />      
    <Route path="/random" component={Random} />  
    <Switch>
    <Link to="/"><Navbar/></Link>
    </Switch> 

    </Router>
  );
}

export default App;
