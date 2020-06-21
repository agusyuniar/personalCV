import React, { Component } from 'react';
import ToggleOnOutlinedIcon from '@material-ui/icons/ToggleOnOutlined';
import PortCard from "../component/portfolioCard";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from "@material-ui/lab";
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from "mdbreact";
import Lightbox from "react-image-lightbox";

import Avatar from '@material-ui/core/Avatar';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



class Portfolio extends Component {
    state = {
        isOpen: false,
        photoIndex: 0,
        sertifikat: [
            {
                judul: "Digitalent Kominfo",
                ket: "Digitalent Kominfo : Programming HTML, CSS, Javascript",
                img: "digitalent.jpg",
            },
            {
                judul: "Purwadhika Startup & Coding School",
                ket: "Purwadhika Startup & Coding School : Web and Mobile Development",
                img: "coming.jpg",
            },
            {
                judul: "Progate",
                ket: "Progate : Web Development Path (Node.js)",
                img: "progate.jpg",
            },
            {
                judul: "Inspigo",
                ket: "Inspigo : Hi, Tech Seminar",
                img: "hitech.jpg",
            },
            {
                judul: "TOEFL",
                ket: "Bina Nusantara English Proficiency Test",
                img: "toefl.jpg",
            },
        ],
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
                        <div className="h5">
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
                                <MDBRow className=" pt-3 mb-3">
                                    {this.renderImgList()}
                                </MDBRow>
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

export default Portfolio;