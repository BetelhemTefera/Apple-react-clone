import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/footer";

import Main from "./components/Main/main";

import Navigation from "./components/Nav/Nav";
import Iphone from "./Pages/Iphone/iphone";
import Mac from "./Pages/Mac/Mac";
import Four04 from "./Pages/Four04/Four04";
import Productpage from "./Pages/Productpage/Productpage";

import "./css/styles.css";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/mac" exact component={Mac} />
            <Route path="/iphone" exact component={Iphone} />
            <Route path="/iphone/:pid" exact component={Productpage} />
            <Route path="/" component={Four04} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
