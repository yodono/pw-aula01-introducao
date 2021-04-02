import React from 'react';

import './Card.css';

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color,
        borderColor: props.color
    }

    return (
        <div className='card' style={cardStyle}>
            <div className='title'><h2>{props.title}</h2></div>
            <div className='content'>
                {props.children}
            </div>
        </div>
    );
}
