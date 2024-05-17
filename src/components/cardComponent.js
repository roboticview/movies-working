import React, { Component } from 'react';
import StarRating from './starRating';

class CardComponent extends Component {
    state = {  } 
    render() { 
        const {title, description, year, genre, rating} = this.props.movie.attributes
        return (
            <div key={this.props.objID} >
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary-emphasis">{genre}</strong>
                    <h3 className="mb-0">{title}</h3>
                    <div className="mb-1 text-body-secondary">
                        <StarRating rating={rating}/>
                    </div>
                    <p className="card-text mb-auto">

                        {
                        description.length > 100 ? `${description.substring(0,100)}...` : description
                        }
                        
                    </p>
                    <a 
                        onClick={()=>this.props.handleClick(this.props.objID)} 
                        className="icon-link gap-1 icon-link-hover stretched-link">
                        Continue reading
                    </a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                    <img src={`http://localhost:1337${this.props.movieImage}`} width="280" height="250" />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default CardComponent;