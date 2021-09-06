import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Menu from "./Menu";
import HeaderBlock from "./HeaderBlock";
import Login from "./Login";
import { selectUser } from "./features/userSlice";
import {useSelector} from 'react-redux'

function App() {
  const user = useSelector(selectUser)

  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header isMenuOpen={isMenuOpen} setisMenuOpen={setisMenuOpen} />
            {isMenuOpen && <Menu />}
            <HeaderBlock />
          </Route>
          <Route exact path="/login">
{ user ? <Redirect to ='/teslaaccount'/> : <Login/> }
            <Login />
          </Route>
          
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;






