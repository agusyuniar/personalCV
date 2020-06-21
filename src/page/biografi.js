import React, { Component } from 'react';
import ToggleOnOutlinedIcon from '@material-ui/icons/ToggleOnOutlined';
import CodeIcon from '@material-ui/icons/Code';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faPuzzlePiece, faCertificate } from '@fortawesome/free-solid-svg-icons'

class Biografi extends Component {
    state = {  }
    render() { 
        return (
            <div className='section pt-5' id="sec-1">
            <div className='' >
                <div className='row'>
                    <div className='col-3 pr-1 col-left'>
                        <div className='left-content' >
                            <img src={require('../img/PP.png')} width='150' alt="profile-pict"/>
                            <h3>Yuniar Agus</h3>
                        </div>
                    </div>
                    <div className='col col-right'>
                        <div className='right-content'>
                            <h2 className="section-title">Halo, Saya Yuniar Agus</h2>
                            <p>
                                Hai, saya adalah web developer yang menggunakan node.js dan react.js juga serta mampu mengoperasikan aplikasi desain seperti photoshop dan illustrator. Saya merupakan alumni dari Binus University dan Purwadhika Startup & Coding School.
                            </p>    

                                <div className="row rowborder" style={{color:"black"}}>
                                    <div className="col">
                                        <h4>Personal Info</h4>
                                        <tr>
                                            <td className="pr-4"><b>Nama</b></td>
                                            <td>Yuniar Agus Rachmanto</td>
                                        </tr>
                                        <tr>
                                            <td><b>TTL</b></td>
                                            <td>Jakarta, 23 Mei 1990</td>
                                        </tr>
                                        <tr>
                                            <td><b>Alamat</b></td>
                                            <td>Jl. H. Taip Kemang Kedaung B4<br />Tangerang Selatan<br />Banten, Indonesia<br />15431</td>
                                        </tr>
                                        <tr>
                                            <td><b>Mail</b></td>
                                            <td>uu.niar@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td><b>Tel</b></td>
                                            <td>+62 857 1035 2936</td>
                                        </tr>
                                    </div>
                                    <div className="col-5">
                                        <h4>Bahasa</h4>
                                        <div className="mt-2"><b>Indonesia</b></div>
                                        <div class="mb-4 progress">
                                            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: "90%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div><b>Inggris</b></div>
                                        <div class="mb-4 progress">
                                            <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: "60%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row rowborder">
                                    <h4 className="col-12">Pendidikan Formal</h4>
                                    <div className="col blacked">
                                        <tr>
                                            <td>
                                                <FontAwesomeIcon icon={faGraduationCap} />
                                            </td>
                                            <td>
                                                <div className="col h6">2008 <CodeIcon fontSize="small" /> 2012 </div>
                                            </td>
                                            <td>
                                                <div className="col">
                                                    <div >
                                                        Bina Nusantara University Jakarta
                                                    </div>
                                                    <div className="h6">
                                                        Progdi : Teknik Informatika
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <FontAwesomeIcon icon={faGraduationCap} />
                                            </td>
                                            <td>
                                                <div className="col h6">2008 <CodeIcon fontSize="small" /> 2012 </div>
                                            </td>
                                            <td>
                                                <div className="col">
                                                    <div >
                                                        Madrasah Aliyah Negeri 4 Jakarta
                                                    </div>
                                                    <div className="h6">
                                                        Jurusan : IPA
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <FontAwesomeIcon icon={faGraduationCap} />
                                            </td>
                                            <td>
                                                <div className="col h6">2008 <CodeIcon fontSize="small" /> 2012 </div>
                                            </td>
                                            <td>
                                                <div className="col ">
                                                    <div className="p">
                                                        Sekolah Menengah Pertama Negeri 87 Jakarta
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </div>

                                </div>
                                <div className="row rowborder">
                                    <h4 className="col-12">Pendidikan Informal</h4>
                                    <div className="col blacked">
                                        <tr className="">
                                            <td className="align-middle">
                                                <FontAwesomeIcon icon={faPuzzlePiece} />
                                            </td>
                                            {/* <td>
                                                <div className="col h6">2008 <CodeIcon fontSize="small" /> 2012 </div>
                                            </td> */}
                                            <td className="pr-5 align-middle blacked">
                                                <div className="col-12">
                                                    <div >
                                                        Purwadhika Coding School
                                                    </div>
                                                    <div className="h6">
                                                        web & mobile development
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="align-middle text-center informal-logo">

                                                <img height="100%" alt="logo" src="https://www.purwadhika.com/static/media/logo.7a5e7400.svg"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="align-middle">

                                                <FontAwesomeIcon icon={faPuzzlePiece} />
                                            </td>
                                            {/* <td>
                                                <div className="col h6">2008 <CodeIcon fontSize="small" /> 2012 </div>
                                            </td> */}
                                            <td className="align-middle">
                                                <div className="col-12 ">
                                                    <div >
                                                        Progate
                                                    </div>
                                                    <div className="h6">
                                                        web development path node.js 
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="align-middle text-center informal-logo">
                                                <img  height="100%" alt="logo" src="data:image/png;base64,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"/>
                                            </td>
                                        </tr>

                                        
                                    </div>

                                </div>

                                <div className="row rowborder">
                                        <h4 className="col-12 ">Ability</h4>
                                    <div className="col-6 blacked">
                                        <tr>
                                            <td className="pr-2"><ToggleOnOutlinedIcon fontSize="small"/></td>
                                            <td>Self motivated</td>
                                        </tr>
                                        <tr>
                                            <td><ToggleOnOutlinedIcon fontSize="small"/></td>
                                            <td>Creative thinking</td>
                                        </tr>
                                        <tr>
                                            <td><ToggleOnOutlinedIcon fontSize="small"/></td>
                                            <td>Work independently as well as team</td>
                                        </tr>
                                        <tr>
                                            <td><ToggleOnOutlinedIcon fontSize="small"/></td>
                                            <td>Multi task ability</td>
                                        </tr>
                                        <tr>
                                            <td><ToggleOnOutlinedIcon fontSize="small"/></td>
                                            <td>Client & Partner satisfy oriented</td>
                                        </tr>
                                    </div>
                                    <div className="col-6 blacked">
                                        {/* <h4>Softskill</h4> */}

                                        <tr>
                                            <td className="pr-2"><ToggleOnOutlinedIcon fontSize="small"/></td>
                                            <td>Node.JS</td>
                                        </tr>
                                        <tr>
                                            <td><ToggleOnOutlinedIcon fontSize="small"/></td>
                                            <td>React.JS</td>
                                        </tr>
                                        <tr>
                                            <td><ToggleOnOutlinedIcon fontSize="small"/></td>
                                            <td>CMS Wordpress, HTML & CSS</td>
                                        </tr>
                                        <tr>
                                            <td><ToggleOnOutlinedIcon fontSize="small"/></td>
                                            <td>Ms. Office </td>
                                        </tr>
                                        <tr>
                                            <td><ToggleOnOutlinedIcon fontSize="small"/></td>
                                            <td>Multimedia app (Photoshop, Illustrator, CorelDraw, etc) </td>
                                        </tr>
                                    </div>
                                </div>
                        </div>
                    </div>
                    {/* <div className="col-1 ">
                        <div className="nav-content ">

                        <FaceIcon className="nav-icon"/>
                        <FaceIcon className="nav-icon"/>
                        <FaceIcon className="nav-icon"/>
                        <FaceIcon className="nav-icon"/>
                        </div>
                    </div> */}
                </div>
            </div>
            </div>
        );
    }
}
 
export default Biografi;