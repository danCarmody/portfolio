import React, { Components} from 'react';

class Portfolio extends Components{
    render() {
        if(this.props.data) {
            
        }

        return(
           <section id="portfolio">
               <div className="row">
                   <div className="twelve columns collapsed">
                       <h1>Check Out Some Of My Work.</h1>
                       <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                           {projects}
                       </div>
                   </div>
               </div>
           </section> 
        );
    }
}
export default Portfolio