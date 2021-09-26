import React from 'react';
import './Card.css'
const Card = (props) => {
    return (
        <div>
            <h2>{props.developors.name}</h2>
        </div>
    );
};

export default Card;