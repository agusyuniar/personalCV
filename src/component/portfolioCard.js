import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from "mdbreact";
import Lightbox from "react-image-lightbox";
import './portfolioCard.css'


class PortCard extends Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    catSelect : null,
    activeTab : 0,
    temp:null,
    img: [
      { 
        image: "bg-remove.jpg", 
        cat: "Image Edit" 
      },
      { 
        image: "cinemaclone.png", 
        cat: "Website" 
      },
      { 
        image: "colorize.jpg", 
        cat: "Image Edit" 
      },
      { 
        image: "color-manipulation-fix.jpg", 
        cat: "Image Edit" 
      },
      { 
        image: "hsn5.jpg", 
        cat: "Design" 
      },
      { 
        image: "pibee1.jpg", 
        cat: "Design" 
      },
      { 
        image: "pibee2.jpg", 
        cat: "Design" 
      },
      { 
        image: "profileteam.png", 
        cat: "Website" 
      },
      { 
        image: "rawtxt.jpg", 
        cat: "Design" 
      },
      { 
        image: "vector.jpg", 
        cat: "Design" 
      },
      { 
        image: "schoolweb.png", 
        cat: "Website" 
      }
    ],
    category : ["All", "Website", "Image Edit", "Design"],
  }



  renderImgList = () => {
    if (this.state.catSelect) {
      var filterCat = this.state.img.filter(item => {
        return this.state.catSelect === item.cat
      })
      this.state.temp=filterCat
      return this.state.temp.map((item,id)=> {
        // console.log(item.image);
        
        return (
          <MDBCol md="4" className="zoomfx">
            <figure  className="shadow">
              <div className="mdb-lightbox no-margin ">
                <MDBView hover zoom >
                  <img
                    src={require(`../img/sample/${item.image}`)}
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
                    src={require(`../img/sample/${item.image}`)}
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
                    <p className="white-text">{item.cat}</p>
                  </MDBMask>
                </MDBView>
              </div>
            </figure>
          </MDBCol>
        )
      })
    }
  }


  render() {
    let { photoIndex, img, isOpen,temp } = this.state
    console.log(this.state.temp);
    

    return (
      <div>
        <MDBContainer>
        <MDBNav className="nav-tabs mt-3 mb-4">
           <MDBNavItem>
             <MDBNavLink
              link
              to="#"
              active={this.state.activeTab == 0}
              onClick={()=>this.setState({catSelect: null, activeTab:0})}
              role="tab"
            >
               All
            </MDBNavLink>
          </MDBNavItem>
           <MDBNavItem>
             <MDBNavLink
              link
              to="#"
              active={this.state.activeTab === 1}
              onClick={()=>this.setState({catSelect:"Website", activeTab:1})}
              role="tab"
            >
              Website
            </MDBNavLink>
          </MDBNavItem>
           <MDBNavItem>
             <MDBNavLink
              link
              to="#"
              active={this.state.activeTab === 2}
              onClick={()=>this.setState({catSelect:"Image Edit", activeTab:2})}
              role="tab"
            >
               Image Edit
            </MDBNavLink>
          </MDBNavItem>
           <MDBNavItem>
             <MDBNavLink
              link
              to="#"
              active={this.state.activeTab === 3}
              onClick={()=>this.setState({catSelect:"Design", activeTab:3})}
              role="tab"
            >
               Design
            </MDBNavLink>
          </MDBNavItem>
          
        </MDBNav>
        </MDBContainer>
        <MDBContainer>
          {/* <div className="mdb-lightbox no-margin" style={{ cursor: "zoom-in" }}> */}
            <MDBRow>
              {this.renderImgList()}
            </MDBRow>
          {/* </div> */}
          {isOpen && (
            <div >
              <Lightbox 
                mainSrc={require(`../img/sample/${temp[photoIndex].image}`)}
                nextSrc={temp[(photoIndex + 1) ]}
                prevSrc={temp[(photoIndex + temp.length - 1)]}
                imageTitle={photoIndex + 1 + "/" + temp.length}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + temp.length - 1) % temp.length
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % temp.length
                  })
                }
              />
            </div>
          )}
        </MDBContainer>
      </div>
    );
  }
}

export default PortCard;