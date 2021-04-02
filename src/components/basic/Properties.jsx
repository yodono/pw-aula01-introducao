import React from 'react';

export default function Properties(props) {
    return (
        <div>
            <h3>Nome: {props.name} {props.lastName}</h3>
            <h3>Idade: {props.age}</h3>
        </div>
    )
}
