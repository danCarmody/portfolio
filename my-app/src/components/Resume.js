import React, { Component } from 'react';

class Resume extends Component {
    render() {
        if(this.props.data) {
            var skillsMessage = this.props.data.skillsMessage;
            var school = this.props.data.education.school;
            var degree = this.props.data.education.degree;
            var years = this.props.data.education.years;
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
                                <p className="info">{degree} <span>&bull;</span><em className="date">{years}</em></p>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </section>   
        )
    }
}

export default Resume;