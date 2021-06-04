import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Calculator from "./Pages/Calculator/Calculator";
import BmiHistory from "./Pages/BmiHistory/BmiHistory";
import DietList from "./Pages/DietList/DietList";
import Reply from "./Pages/Reply/Reply";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Calculator} />
          <Route path="/bmihistory" component={BmiHistory} />
          <Route path="/dietlist" exact component={DietList} />
          <Route path="/dietlist/:rep" render={(renderProps)=>{
            return <Reply {...renderProps}  />
          }} />
        </Switch>
      </div> 
    </Router>
  );
}

export default App;
