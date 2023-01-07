import React from 'react';
import './Card.css'

const Card = (props) => (
    <div className= "card-container">
        <div className = "card">
            <div className = "front">
                <div className="Question">{props.Question}</div>  
            </div>
            <div className = "back">
                <div className="Answer">{props.Answer}</div>
            </div>
        </div>
        
    </div>
)
export default Card