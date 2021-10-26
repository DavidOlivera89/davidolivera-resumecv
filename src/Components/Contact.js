import React, { Component } from "react";
//import { Fade, Slide } from "react-reveal";

import { Fade } from "react-reveal";


class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    // const name = this.props.data.name;
    // const street = this.props.data.address.street;
    // const city = this.props.data.address.city;
    // const state = this.props.data.address.state;
    // const zip = this.props.data.address.zip;
    // const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
        <Fade bottom duration={2000}>
          <div className="row section-head">
           

            <div className="">
              <p className="lead">{message}</p>
            </div>
          </div>
            <div className="row header-col">
              
              <p className="sendemail">
                <a className="sendemail" href="mailto:davidolivera8989@gmail.com">
              <i class="fa fa-envelope-o"></i>
            </a>
        </p>
                
              
            </div>
          
        </Fade>

        
      </section>
    );
  }
}

export default Contact;
