import React, { Component } from 'react';

class MenuComponent extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <div className="nav-scroller py-1 mb-3 border-bottom">
                    <nav className="nav nav-underline justify-content-between">
                    { this.props.genres.map( (banana)  => (
                        <a key={banana} className="nav-item nav-link link-body-emphasis" 
                        onClick={() => this.props.handleGenre(banana)}
                        >{banana}</a>
                    ))
                    }
                    </nav>
                </div>
            </div>
        );
    }
}
 
export default MenuComponent;