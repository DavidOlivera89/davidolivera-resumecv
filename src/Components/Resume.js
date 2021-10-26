import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
 /*  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  } */

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} 
          </p>  
            <p className="date"><span>&bull;</span>{education.graduated}</p>
          
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}</p>
            
             <p className="date">&bull;{work.years}
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    // const skills = this.props.data.skills.map((skills) => {
    //   const backgroundColor = this.getRandomColor();
    //   const className = "bar-expand " + skills.name.toLowerCase();
    //   const width = skills.level;

    //   return (

    //     <li key={skills.name}>
    //       <span style={{ width, backgroundColor }} className={className}></span>
    //       <em>{skills.name}</em>
    //     </li>

         
    //   );
    // });
      
    

      
   

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              
            </div>
          </div>
        </Slide>
    
        <Slide left duration={1300}>
          <div className="skills-container" id="skills">
            
            <section id="languages" >
              <ul>
                <li>
                  <img src="images/react.png" alt="react logo" />
                  <p>React.js</p>
                </li>
                <li>
                  <img src="images/html.png" alt="html logo" />
                  <p>HTML</p>
                </li>
                <li>
                  <img src="images/css.png" alt="css logo" />
                  <p>CSS</p>
                </li>
                <li>
                  <img src="images/javascript.png" alt="javascript logo" />
                  <p>JavaScript</p>
                </li>
                <li>
                  <img src="images/git.png" alt="git logo" />
                  <p>Git</p>
                </li>
                <li>
                  <img src="images/github.png" alt="github logo" />
                  <p>GitHub</p>
                </li>
                <li>
                  <img src="images/node.png" alt="node.js logo" />
                  <p>Node.js</p>
                </li>
                <li>
                  <img src="images/php.png" alt="php logo" />
                  <p>PHP</p>
                </li>
                <li>
                  <img src="images/sql.png" alt="sql" />
                  <p>SQL</p>
                </li>
                <li>
                  <img src="images/json1.png" alt="json" />
                  <p>JSON</p>
                </li>
              </ul>
            </section>
          </div>
        </Slide>

      </section>
    );
  }
}

export default Resume;
