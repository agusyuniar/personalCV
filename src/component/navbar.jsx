import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink} from 'mdbreact';
// import { BrowserRouter as Router } from 'react-router-dom';
import './gaya.scss'
import Jumbo from "./jumbotron";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


class FullPageIntroWithFixedTransparentNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }



  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };

  render() {
    return (
      <div >
            <MDBNavbar color="elegant-color" fixed="top" dark expand="md" scrolling style={{background: "linear-gradient(to left, #525252, #3d72b4)"}}>
            <div className='container'>

              <MDBNavbarBrand href="/" className='navlogo'>
                Yuniar Agus
              </MDBNavbarBrand>
              {/* {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />} */}
              {/* <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem >
                    <MDBNavLink to="#">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Link</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Profile</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse> */}
              </div>
            </MDBNavbar>

            <Jumbo />
        {/* <KeyboardArrowUpIcon
          className="fixed-bottom text-right pr-5 pb-3"
          onClick={this.scrollTop}
          // style={{ height: 40, position: "fixed" }}
        /> */}

            {/* <a href="#" className=" pr-5 pb-3" onClick={this._div.scrollTop = 0}><KeyboardArrowUpIcon className="rounded mt-2 mb-2" style={{color:"white", backgroundColor:"lightslategrey", height:"50px"}}/></a> */}
            {/* <a href="#" className="fixed-bottom text-right pr-5 pb-3"><KeyboardArrowUpIcon className="rounded mt-2 mb-2" style={{color:"white",backgroundColor:"lightslategrey"}}/></a> */}
      </div>
    );
  }
}

export default FullPageIntroWithFixedTransparentNavbar;