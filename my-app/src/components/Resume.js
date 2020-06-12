import React, { Component } from ' react';

class Resume extends Component {
    render() {
        if(this.props.data) {
            var skillmessage = this.props.data.skillmessage;
            var school = this.props.data.education.school;
            var years = this.props.data.education.years;
            var degree = this.props.data.education.degree;
            var description = this.props.education.description;
            
            var work = this.props.data.work.map(function(work) {
            return <div key={work.company}><h3>{work.company}</h3>
                <p className="info">{work.title}<span>&bull;</span><em className="date">{work.years}</em></p>
                <p className="newline">{work.description}</p>
            </div>
            })

            var skills = this.props.data.skills.map(function(skills){
                var images = 'images/tech/' + skills.images
            })
        }
        return (
            <section id="resume">
                
            </section>
        );
    }
}