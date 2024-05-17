import React, { Component } from 'react';

class HeroComponent extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
                    <div className="col-lg-6 px-0">
                        <h1 className="display-4 fst-italic">Best Movies</h1>
                        <p className="lead my-3">Welcome to the highest-rated best movies of all time, as reviewed and selected by us-approved critics.</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default HeroComponent;