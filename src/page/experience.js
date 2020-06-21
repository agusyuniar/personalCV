import React, { Component } from 'react';
import ToggleOnOutlinedIcon from '@material-ui/icons/ToggleOnOutlined';
import PortCard from "../component/portfolioCard";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from "@material-ui/lab";
import Avatar from '@material-ui/core/Avatar';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Portfolio extends Component {
    state = {
        isOpen: false,

       exp:[
        {
            company:"Shofwa Catering",
            posisi: "Catering dan Operational",
            jobdesk: "Menjalankan usaha katering kecil dibawah kendali dari yayasan Al-Mumtaz Pontianak ",
            periode: "06/2017 ~ 07/2019",
            logo: "shofwa-katering.png"
            // logo: <img src={require("../img/shofwa-katering.png")} height="40" alt="shofwa"/>

        },
        {
            company:"PT. Kartika Sakti Persada",
            posisi: "Administration & Operational",
            jobdesk: "Mengelola dokumen administrasi perusahaan dan perpajakan ",
            periode: "04/2015 ~ 05/2017",
            logo: "KSP.png"
        },
        {
            company:"PT. Mindreach Consulting",
            posisi: "Junior Design Graphic",
            jobdesk: "Editing foto dan membuat desain produk untuk keperluan e-Commerce",
            periode: "09/2012 ~ 04/2015",
            logo: "mindreach.png"
        },
        {
            company:"CV. Innovation Network",
            posisi: "Web Designer",
            jobdesk: "Maintenance & membuat halaman website perusahaan",
            periode: "03/2011 ~ 06/2011",
            logo: "innovationnet.png"
        },
    ]
    }

    renderJob=()=>{
        return this.state.exp.map((item,id)=>{
            return (
                <TimelineItem >
                    <TimelineOppositeContent>
                        <Typography variant="body1" color="textSecondary" className="exp-period border-top rounded p-1 mt-2">
                            {item.periode}
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator >
                        <img src={require(`../img/${item.logo}`)} height="40" alt={item.company} style={{maxWidth:"150px"}} className="exp-logo"/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className="mb-5 ">
                        <Paper elevation={8} className="p-3 exp">
                            <Typography variant="p" component="h3" className="exp-title border-bottom mb-2 pb-1">
                                {item.posisi}
                            </Typography>
                            <Typography variant="p" component="h5" color="primary">
                                {item.company}
                            </Typography>
                            <Typography variant="body1" component="h6" className="exp-desk pt-2">{item.jobdesk}</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            )
        })
    }    


    render() {
        return (
            <div className='section pt-5' id="sec-3">
                <div className='row'>
                    <div className='col'>
                        <div className='right-content'>
                        <h2 className="text-left blacked">Pengalaman</h2>
                            <Timeline align="alternate" className="exp-section">
                                {this.renderJob()}
                            </Timeline>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;