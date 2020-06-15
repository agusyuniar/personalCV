import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from "./component/navbar";
import HomeSweetHome from "./page/home";
import Footer from "./component/footer";
// import SideMenu from "./component/sidemenu";

// function App() {
  class App extends Component {

  // return (
  //   <div className="App">
      
  //   </div>
  // );
    render() {
      return (
        <div className="App">
          <Navbar/>
          {/* <SideMenu/> */}
          <Switch>
            <Route path='/' component={HomeSweetHome} exact />
          </Switch>
          <Footer />
        </div>
      )
    }
}

export default App;
