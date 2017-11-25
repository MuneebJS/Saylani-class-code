import React, { Component } from 'react';
import {Redirect} from 'react-router';


class About extends Component {
    constructor () {
        super();

    }

    redirect() {
       return <Redirect to="/contact" />
    }
    render() {
        return (
            <div className="About">
                <p>
                    Hey! I'm About
                </p>
                {/* <button onClick={this.redirect.bind(this)}></button> */}
            </div>
        );
    }
}

export default About;
