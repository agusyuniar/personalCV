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
                
                <a href="#sec-1">
                <Tooltip arrow title="Biography" placement="right" >
                    <FaceIcon className="nav-icon" style={{color:"black"}}/>
                    {/* <img src={require("../img/me.png")} height="50px"/> */}
                </Tooltip>
                </a>
                <a href="#sec-2">
                <Tooltip arrow title="Portfolio" placement="right" >
                    <PermMediaIcon className="nav-icon" />
                </Tooltip>
                </a>
                <a href="#sec-3">
                <Tooltip arrow title="Experience" placement="right" >
                    <ListAltIcon  className="nav-icon" color="secondary"/>
                </Tooltip>
                </a>
                <a href="#sec-4">
                <Tooltip arrow title="Miscellanious" placement="right" >
                    <DynamicFeedIcon className="nav-icon" color="primary"/>
                </Tooltip>
                </a>
                <a href="#sec-5">
                <Tooltip arrow title="Mail Me" placement="right" >
                    <ContactPhoneIcon className="nav-icon" color="action"/>
                </Tooltip>
                </a>
                <a href="#" className="">
                <Tooltip arrow title="scroll to top" placement="right" >
                    <KeyboardArrowUpIcon className="nav-icon" />
                </Tooltip>
                </a>

            </div>
        );
    }
}
 
export default Sidenavigate;