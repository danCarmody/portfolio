import React, { Component } from 'react';

class Contact extends Component {
    render() {
        if(this.props.data) {
            var message = this.props.contactMessage
        }

        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="two columns header-col">
                        <h1><span>Contact Me</span></h1>
                    </div>

                    <div className="ten columns">
                        <p className="lead">{message}</p>
                        <br/>
                        <p className="lead warning">Warning: Contact form not yet configured. Feature coming soon. please contact through normal email for now.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="twelve columns">
                        <form action="" method="post" id="contactForm" name ="contactForm">
                            <fieldset>
                                <div>
                                    <label htmlFor="contactName">Name <span className="required">*</span></label>
                                    <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                                </div>
                                <div>
                                    <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                    <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                                </div>
                                <div>
                                    <label htmlFor="contactSubject">Subject <span className="required">*</span></label>
                                    <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                                </div>
                                <div>
                                    <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                    <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                                </div>
                                {/* <div>
                                    <button className="submit">Submit</button>
                                    <span id="image-loader">
                                        <img alt="" src="images/loader.gif" />
                                    </span>
                                </div> */}
                            </fieldset>
                        </form>
                        <div className="message-warning">Error</div>
                        <div id="message-success">
                            <i className="fa fa-check"></i>Your message was sent, thank you! <br />
                        </div>
                    </div>
                </div>
            </section>
        )
    } 
}

export default Contact;