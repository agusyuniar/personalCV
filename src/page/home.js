import React, { Component } from 'react';
import Sidenav from "../component/sideNav";
import Biograf from "./biografi";
import Portfolio from "./portfolio";
import Expr from "./experience";
import Misc from "./miscelanious";
import Contact from "./contact"

class Home extends Component {
    state = {}
    render() { 
        return (
            <div className="bg">
            <div className="container row m-auto">
                <div className="col-11" style={{padding:0}}>
                    <div className="row">
                        <div className="col-12">
                        <Biograf/>
                        <Portfolio />
                        <Expr/>
                        <Misc/>
                        <Contact/>
                    </div>
                    </div>

                </div>
                <div className="col-1 pt-5">
                    <Sidenav />
                </div>
            </div>
            </div>
        );
    }
}
 
export default Home;