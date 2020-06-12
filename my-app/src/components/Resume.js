import React, { Component } from 'react';

class Resume extends Component {
    render() {
        if(this.props.data) {
            var skillmessage = this.props.data.skillmessage;
            var school = this.props.data.education.school;
            var years = this.props.data.education.years;
            var degree = this.props.data.education.degree;
            var description = this.props.data.education.description;
            
            var work = this.props.data.work.map(function(work) {
                return <div key={work.company}><h3>{work.company}</h3>
                    <p className="info">{work.title}<span>&bull;</span><em className="date">{work.years}</em></p>
                    <p className="newline">{work.description}</p>
                </div>
            });

            var skills = this.props.data.skills.map(function(skills){
                var projectImages = 'images/tech/' + skills.image;
                var className = 'bar-expand ' + skills.name.toLowerCase();
                return <li key={skills.name} className="columns feature-item">
                        <img className="skill" alt={skills.name} src={projectImages} />
            <h5>{skills.name}</h5>
            <span style={{width:skills.level}} className={className}></span>
            {/* <p>{skills.description}</p> */}
                </li>
            });
        }
        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>{school}</h3>
                                <p className="info">{degree} <span>&bull;</span> <em className="date">{years}</em></p>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>

                    <div className="nine columns main-col">
                        {work}
                    </div>
                </div>

                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>

                    <div className="nine columns main-col"><p className="lead center">{skillmessage}</p>
                        <div className="bars">
                            <ul className="bgrid-quarters s-bgrid-thirds cf">
                                {skills}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;