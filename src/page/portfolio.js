import React, { Component } from 'react';
import ToggleOnOutlinedIcon from '@material-ui/icons/ToggleOnOutlined';
import PortCard from "../component/portfolioCard";
import { MDBView } from "mdbreact";

class Portfolio extends Component {
    state = {}
    render() {
        return (
            <div className='section pt-5' id="sec-2">
                <div className='row'>
                    <div className='col'>
                        <div className='right-content'>
                            <h2 className="text-right blacked">Portofolio</h2>
                            <div className="row">
                                <div className="col">
                                    <PortCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;