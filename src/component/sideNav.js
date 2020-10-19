import React, { Component } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import FaceIcon from '@material-ui/icons/Face';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';


class Sidenavigate extends Component {


    render() { 
        
        return (
            <div className="nav-content ">
                
                <Tooltip arrow title="Biography" placement="right" >
                <a href="#sec-1">
                    <FaceIcon className="nav-icon" style={{color:"black"}}/>
                    {/* <img src={require("../img/me.png")} height="50px"/> */}
                </a>
                </Tooltip>
                <Tooltip arrow title="Portfolio" placement="right" >
                <a href="#sec-2">
                    <PermMediaIcon className="nav-icon" />
                </a>
                </Tooltip>
                <Tooltip arrow title="Experience" placement="right" >
                <a href="#sec-3">
                    <ListAltIcon  className="nav-icon" color="secondary"/>
                </a>
                </Tooltip>
                <Tooltip arrow title="Miscellanious" placement="right" >
                <a href="#sec-4">
                    <DynamicFeedIcon className="nav-icon" color="primary"/>
                </a>
                </Tooltip>
                <Tooltip arrow title="Mail Me" placement="right" >
                <a href="#sec-5">
                    <ContactPhoneIcon className="nav-icon" color="action"/>
                </a>
                </Tooltip>
                <Tooltip arrow title="scroll to top" placement="right" >
                <a href="#" className="">
                    <KeyboardArrowUpIcon className="nav-icon" />
                </a>

                </Tooltip>
            </div>
        );
    }
}
 
export default Sidenavigate;