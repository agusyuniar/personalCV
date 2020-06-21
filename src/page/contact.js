import React, { Component } from 'react';
import * as emailjs from 'emailjs-com'


class Contact extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }

    handleSubmit(e) {
        e.preventDefault()
        let { name, email, subject, message } = this.state
        let templateParams = {
            from_name: email,
            to_name: 'uu.niar@gmail.com',
            subject: subject,
            message_html: message,
        }
        emailjs.send(
            'gmail',
            'template_3GbPuHkr',
            templateParams,
            'user_Z0dSJ1VuOxQFRpjSoPYP9'
        )
        this.resetForm()
    }

    resetForm() {
        this.setState({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
      }


    render() {
        let {name,email,subject,message} = this.state
        console.log(this.state);
        
        return (
            <div className='section pt-5 mb-5' id="sec-5">
                <div className='row'>
                    <div className='col'>
                        <div className='right-content' style={{ backgroundImage: "linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)" }}>
                            <h2 className="text-left blacked">Hubungi Saya ?</h2>
                            <div class="container contact-form rowborder">

                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    {/* <h3>Drop Us a Message</h3> */}
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="text" name="txtName" class="form-control" placeholder="Your Name *" value={name} onChange={(val)=>this.setState({name:val.target.value})} />
                                            </div>
                                            <div class="form-group">
                                                <input type="text" name="txtEmail" class="form-control" placeholder="Your Email *"  value={email} onChange={(val)=>this.setState({email:val.target.value})}/>
                                            </div>
                                            <div class="form-group">
                                                <input type="text" name="txtSubject" class="form-control" placeholder="Your Subject" value={this.state.subject} onChange={(val)=>this.setState({subject:val.target.value})}/>
                                            </div>
                                            <div class="form-group">
                                                <input type="submit" name="btnSubmit" class="btnContact" value="Kirim Pesan"/>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <textarea name="txtMsg" class="form-control" placeholder="Your Message *" style={{ width: "100%", height: "200px" }} value={this.state.message} onChange={(val)=>this.setState({message:val.target.value})}></textarea>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
