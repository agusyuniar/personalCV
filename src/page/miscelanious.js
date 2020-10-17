import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBMask} from "mdbreact";
import Lightbox from "react-image-lightbox";
import SertifCard from "../component/sertifCard";



class Misc extends Component {
    state = {
        isOpen: false,
        hobby: [
            {
                name : "Badminton",
                img : "badminton.png"
            },
            {
                name : "Editing",
                img : "design.png"
            },
            {
                name : "Swimming",
                img : "swim.png"
            },
            {
                name : "Listening Music",
                img : "music.png"
            },
        ]
    }

    renderImgList = () => {
        return this.state.sertifikat.map((item, id) => {
            return (
                <MDBCol md="6" className="zoomfx">
                    <figure >
                        <div className="mdb-lightbox no-margin ">
                            
                            <MDBView hover zoom>
                                <img
                                    src={require(`../img/sertif/${item.img}`)}
                                    alt={item.judul}
                                    className="img-fluid"
                                />
                                <MDBMask className="flex-center" overlay="black-light" style={{ cursor: "zoom-in" }}
                                    onClick={() =>
                                        this.setState({
                                            photoIndex: id,
                                            isOpen: true
                                        })
                                    }>
                                    <p style={{ color: 'white', fontWeight: 'bolder', backgroundColor: 'black', borderRadius: '15px', padding: '5px 20px' }}>{item.judul}</p>
                                </MDBMask>
                            </MDBView>
                        </div>
                    </figure>
                </MDBCol>
            )
        })
    }

    renderHobi=()=>{
        return this.state.hobby.map((item,id)=>{
            return (
                    <div className="col-6 text-center" style={{padding:"3% 5%"}}>
                        <img src={require(`../img/interest/${item.img}`)} alt={item.name} height="60" className="mb-3"/>
                        <div className="h5" style={{color:"black"}}>
                            {item.name}
                        </div>
                    </div>
            )
        })
    }


    render() {

        let { isOpen, photoIndex, sertifikat } = this.state

        return (
            <div className='section pt-5' id="sec-4">
                <div className='row'>
                    <div className='col'>
                        <div className='right-content'>
                            <h2 className="text-right blacked">Lain - lain</h2>

                            <MDBContainer>
                                {/* <div className="mdb-lightbox no-margin" style={{ cursor: "zoom-in" }}> */}
                                <div className="h4 text-center border-bottom pb-1 mb-4 blacked">
                                    Sertifikat
                                </div>
{/* ------------------------------- */}

<SertifCard/>
{/* ------------------------------- */}
                                {/* <MDBRow className=" pt-3 mb-3">
                                    {this.renderImgList()}
                                </MDBRow> */}
                                
                                <div className=" rowborder" />
                                <div className="h4 text-center  pb-1 mb-4 blacked">
                                    Hobby & Interest
                                </div>
                                <MDBRow className=" pt-3 mb-3">
                                    <div className="row m-auto">
                                    {this.renderHobi()}
                                    </div>
                                </MDBRow>

                                {/* </div> */}
                                {isOpen && (
                                    <div>
                                        <Lightbox
                                            mainSrc={require(`../img/sertif/${sertifikat[photoIndex].img}`)}
                                            imageCaption={sertifikat[(photoIndex)].ket}
                                            nextSrc={sertifikat[(photoIndex + 1) % sertifikat.length]}
                                            prevSrc={sertifikat[(photoIndex + sertifikat.length - 1) % sertifikat.length]}
                                            imageTitle={photoIndex + 1 + "/" + sertifikat.length}
                                            onCloseRequest={() => this.setState({ isOpen: false })}
                                            onMovePrevRequest={() =>
                                                this.setState({
                                                    photoIndex: (photoIndex + sertifikat.length - 1) % sertifikat.length
                                                })
                                            }
                                            onMoveNextRequest={() =>
                                                this.setState({
                                                    photoIndex: (photoIndex + 1) % sertifikat.length
                                                })
                                            }
                                        />
                                    </div>
                                )}
                            </MDBContainer>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Misc;