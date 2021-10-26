import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const bio1 = this.props.data.bio1;
    const bio2 = this.props.data.bio2;
    const bio3 = this.props.data.bio3;
    const bio4 = this.props.data.bio4;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const linkedin = this.props.data.linkedin;
        const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="David Olivera profile"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
              <p>{bio1}</p>
              <p>{bio2}</p>
              <p>{bio3}</p>
              <p>{bio4}</p>

              <hr></hr>
              <div className="row">

                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span className= "fa fa-envelope"></span>   {email}
                    <br />
                    
                       <span className= "fa fa-linkedin"></span>  linkedin.com/david-olivera-89
                  
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload}  target="_blank" rel="noreferrer" className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
