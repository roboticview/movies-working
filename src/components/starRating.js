import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import l from "lodash";

class StarRating extends Component {
    state = {  } 
    render() { 
        const {rating} = this.props
        const numberOfStars = l.range(0,rating)
        return (
        <div>
            {numberOfStars.map((star)=>(
                <FontAwesomeIcon key={star} icon={faStar} style={{color:"orange"}} />
            )
            )}
        </div>
    );
    }
}
 
export default StarRating;
