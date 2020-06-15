import React, { Component } from 'react';
import { MDBMask, MDBView } from 'mdbreact';

class Jumbo extends Component {
    state = {}
    render() {
        return (
            <div>
                <MDBView src={require('../img/table.JPG')}>
                    <MDBMask overlay="black-light" className="flex-center flex-column text-white ">

                        <h2 className='motto'><h6 style={{ fontWeight: "normal" }}><i><u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Welcome to <b>Yuniar</b>Agus &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </u></i></h6>
                            <i>"Destiny is no matter of chance. It is a matter of choice"</i><h6 style={{ fontWeight: "normal", fontSize: "10pt" }}><i>~ William Jennings Bryan ~</i></h6></h2>
                        <div className="container" >

                        </div>
                        <a className="btn-start" href="#sec-1">Know More</a>
                    </MDBMask>
                </MDBView>
            </div>
        );
    }
}

export default Jumbo;