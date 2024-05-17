import React, { Component } from 'react';
import StarRating from './starRating';
class DeatilView extends Component {
    state = {  } 
    render() { 
        const {title, rating, genre,description, year, actor} = this.props.movie.data.attributes
        return (
            <div className="blog-post">
                <h2 lassName="display-5 link-body-emphasis mb-1">{title}</h2>
                <div className='m-2'>
                    <StarRating rating={rating}/>
                </div>
                <nav class="blog-pagination" aria-label="Pagination">
                    <a class="btn btn-outline-primary rounded-pill m-2" href="a.com">{genre}</a>
                    <a class="btn btn-outline-primary rounded-pill m-2" href="a.com">{year}</a>
                </nav>
                <h3>Actor: {actor}</h3>
                <p>{description}</p>
            </div>
        );
    }
}
 
export default DeatilView;