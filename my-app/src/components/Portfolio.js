import React, { Components} from 'react';

class Portfolio extends Components{
    render() {
        if(this.props.data) {
            var title = this.props.data.title;
            var desc = this.props.data.description;
            var link = this.props.data.link;
        }

        return(
            
        );
    }
}
export default Portfolio