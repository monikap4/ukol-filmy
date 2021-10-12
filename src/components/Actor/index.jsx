import React from 'react';
import './style.css';

const Actor = (props) => {
    return (
        <div className="actors-item">
            <h4>{props.name}</h4> 
            <span>as {props.as}</span>
        </div>
    )
}

export default Actor;