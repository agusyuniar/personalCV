import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { MDBIcon } from "mdbreact";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

class Footer extends Component {
    state = {}
    render() {
        return (
            <div style={{backgroundImage: "linear-gradient(to top, #09203f 0%, #537895 100%)"}}>
                <div className="row m-auto" style={{padding:"10px 0", width:"20%"}}>
                    <a className="col" href="https://www.linkedin.com/in/yuniar-agus-b2a271b9/">
                        <LinkedInIcon/>
                    </a>
                    <a className="col" href="https://www.instagram.com/uu_niar/">
                        <InstagramIcon />
                    </a>
                    <a className="col" href="https://github.com/agusyuniar">
                        <GitHubIcon />
                    </a>
                </div>
                <div className="text-center py-2" style={{backgroundColor: "#09203f", color:"#fff"}}>
                    <div>
                        &copy; {new Date().getFullYear()} Copyright <a style={{color:"#fff",textDecoration:"none"}} href="#"> yuniar<strong>agus</strong>.com </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;