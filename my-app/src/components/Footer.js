import React, { Component } from 'react';

class Footer extends Component {
    render () {
        if(this.props.data){
            var networks = this.props.data.social.map(function(network){
                return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
            })
        }

        return(
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            {networks}
                        </ul>

                        <li>&copy; Copyright 2020 <a title="Dan Carmody" href="https://www.dancarmody.dev">Dan Carmody</a></li>
                        <li>Designed by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
                    </div>
                    <div id="go-top">
                        <a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer