import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBView, MDBMask, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from "mdbreact";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBPopover, MDBPopoverBody,
  MDBPopoverHeader, MDBTooltip } from 'mdbreact';
import Lightbox from "react-image-lightbox";
import './portfolioCard.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CloseIcon from '@material-ui/icons/Close';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Swal from 'sweetalert2'

class PortCard extends Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    catSelect : "All",
    activeTab : 0,
    temp:null,
    img: [
      { 
        image: "purwadhika.jpg", 
        title: "Purwadhika"
      },
      { 
        image: "digitalent.jpg", 
        title: "Digitalent Kominfo"
      },
      { 
        image: "progate.jpg", 
        title: "Progate"
      },
      { 
        image: "progate (1).jpg", 
        title: "Progate"
      },
      { 
        image: "progate (2).jpg", 
        title: "Progate"
      },
      { 
        image: "progate (3).jpg", 
        title: "Progate"
      },
      { 
        image: "progate (4).jpg", 
        title: "Progate"
      },
      { 
        image: "progate (5).jpg", 
        title: "Progate"
      },
      { 
        image: "ugama.jpg", 
        title: "Rise uGama"
      },
      { 
        image: "toefl.jpg", 
        title: "TOEFL"
      },
      { 
        image: "dewatalks.jpg", 
        title: "Dewatalks"
      }
    ],
    category : ["All", "Website", "Image Edit", "Design"],
  }



  renderImgList = () => {
    if (this.state.catSelect!=="All") {
      var filterCat = this.state.img.filter(item => {
        return this.state.catSelect === item.cat
      })
      // this.setState({temp:filterCat})
      this.state.temp=filterCat
      return this.state.temp.map((item,id)=> {
        // console.log(item.image);
        
        return (
          <MDBCol md="4" className="zoomfx" key={item.id}>
            <figure  className="shadow">
                <div className="mdb-lightbox no-margin ">
                <MDBView hover zoom >
                  <img
                    src={require(`../img/sertif/${item.image}`)}
                    alt={"Gallery"+id+1}
                    className="img-fluid "
                  />
                  <MDBMask className="flex-center" overlay="black-light" style={{ cursor: "zoom-in" }}
                    onClick={() =>
                      this.setState({
                        photoIndex: id,
                        isOpen: true
                      })
                    }>
                    <p className="white-text">{item.cat}</p>
                  </MDBMask>
                </MDBView>
              </div>
            </figure>
          </MDBCol>
        )
      })
    } else {
      this.state.temp = this.state.img
    return this.state.temp.map((item, id) => {
        return (
          
          <MDBCol md="4" className="zoomfx">
            
            <figure  >
              <div className="mdb-lightbox no-margin ">
                <MDBView hover zoom className="shadow rounded">
                  <img
                    src={require(`../img/sertif/${item.image}`)}
                    alt={"Gallery"+(id+1)}
                    className="img-fluid"
                    // style={{maxHeight:"100px"}}
                  />
                  <MDBMask className="flex-center" overlay="black-light" style={{ cursor: "zoom-in" }}
                    onClick={() =>
                      this.setState({
                        photoIndex: id,
                        isOpen: true
                      })
                    }>
                    <p className="white-text px-5 py-2" style={{backgroundColor:"rgba(0,0,0,.5)", borderRadius:"15px"}}>{item.title}</p>
                  </MDBMask>
                </MDBView>
              </div>
            </figure>
          </MDBCol>
        )
      })
    }
  }

  renderCat=()=> {
    return this.state.category.map((item,id)=>{
      return (
        <MDBNavItem>
             <MDBNavLink
              link
              to="#"
              active={this.state.activeTab == id}
              onClick={()=>this.setState({catSelect: item, activeTab:id})}
              role="tab"
            >
               {item}
            </MDBNavLink>
          </MDBNavItem>
      )
    })
  }

  render() {
    let { photoIndex, img, isOpen,temp } = this.state
    console.log(this.state.temp);
    

    return (
      <div >
        {/* <MDBBtn color="primary" onClick={()=>this.setState({isOpen:true})}>MDBModal</MDBBtn> */}
        {isOpen
          &&(<MDBModal className='container' isOpen={this.state.isOpen} toggle={!this.state.isOpen} centered size="fluid" >
            {/* <MDBModalHeader toggle=''>MDBModal title</MDBModalHeader> */}
            <MDBModalBody className="text-center row" toggle={!this.state.isOpen}>
            <div className="col-11 py-2" style={{ color: "#CCE6F4"}}>
                      {photoIndex + 1 + "/" + temp.length}
                    </div>
                    <a className="col-1" style={{color:"#fff", padding:"1%"}} onClick={() => this.setState({ isOpen: !isOpen })}>
                        <CloseIcon color='primary'/>
                      </a>
              <Fade in={true}>
                <div style={{
                  // background: "rgba(0, 0, 0, 0.3)"
                }}>
                  <div className="">
                    
                    <div className="row m-auto text-center">
                      <a 
                          className="text-center col-1"
                          style={{padding:"25% 0", margin:"0 0 0 20px",maxWidth:"40px", borderRadius:"50px 0 0 50px", backgroundColor:"rgba(0, 0, 0, .5)"}}
                          onClick={() =>
                          this.setState({
                            photoIndex: (photoIndex + temp.length - 1) % temp.length
                          })
                        }>
                          <ArrowBackIosIcon className="text-white"/>
                        </a>
                      <div className="col-10 m-auto">
                        <img src={require(`../img/sertif/${temp[photoIndex].image}`)} className="shadow" width="100%"/>
                      </div>

                        <a 
                          className="text-center col-1"
                          style={{padding:"25% 0", margin:"0 20px 0 0",maxWidth:"40px", borderRadius:"0 50px 50px 0", backgroundColor:"rgba(0, 0, 0, .5)"}}
                          onClick={() =>
                          this.setState({
                            photoIndex: (photoIndex + temp.length + 1) % temp.length
                          })
                        }><ArrowForwardIosIcon className="text-white"/></a>
                    </div>
                    <div className="text-center" style={{ color: "#CCE6F4", backgroundColor: "black" }}>
                      {temp[(photoIndex)].ket}
                    </div>
                  
                  </div>
                </div>
              </Fade>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={()=>this.setState({isOpen:false})}>Close</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
          )
          }
{/* --------------------------- */}
        {/* <MDBContainer>
        <MDBNav className="nav-tabs mt-3 mb-4">
          {this.renderCat()}
          
        </MDBNav>
        </MDBContainer>*/}
        <MDBContainer> 
            <MDBRow>
              {this.renderImgList()}
            </MDBRow>
          {/* {isOpen && (
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',}}
              open={()=>this.setState({isOpen:!isOpen})}
              onClose={()=>this.setState({isOpen:!isOpen})}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={true}>
                <div style={{
                  background: "rgba(0, 0, 0, 0.3)"
                }}>
                  <div>
                    <div className="text-center  row">
                    <div className="col-11 py-2" style={{ color: "#CCE6F4"}}>
                      {photoIndex + 1 + "/" + temp.length}
                    </div>
                      <a className="col-1" style={{color:"#fff", padding:"1%"}} onClick={() => this.setState({ isOpen: !isOpen })}>
                        <CloseIcon />
                      </a>

                      </div>
                    <div className="row">
                      <a 
                          className="text-center"
                          style={{padding:"25% 0", margin:"0 0", width:"3%", backgroundColor:"rgba(0, 0, 0, 1)"}}
                          onClick={() =>
                          this.setState({
                            photoIndex: (photoIndex + temp.length - 1) % temp.length
                          })
                        }>
                          <ArrowBackIosIcon className="text-white"/>
                        </a>
                      <div className="col">
                        <img src={require(`../img/sample/${temp[photoIndex].image}`)} className="container" height="98%" />
                      </div>
                        <a 
                          className="text-center"
                          style={{padding:"25% 0", margin:"0 0", width:"3%", backgroundColor:"rgba(0, 0, 0, 1)"}}
                          onClick={() =>
                          this.setState({
                            photoIndex: (photoIndex + temp.length + 1) % temp.length
                          })
                        }><ArrowForwardIosIcon className="text-white"/></a>
                    </div>
                    <div className="text-center" style={{ color: "#CCE6F4", backgroundColor: "black" }}>
                      {temp[(photoIndex)].ket}
                    </div>
                  </div>
                </div>
              </Fade>
            </Modal>
              )} */}
        </MDBContainer>
      </div>
    );
  }
}

export default PortCard;