import React, { cloneElement } from 'react';

export default props => {

    return (
        <div>
            {/* Único elemento filho */}
            {/* {cloneElement(props.children, {...props} */}

            {/* Vários elementos */}
            {props.children.map((child) => {
                return cloneElement(child, {...props})
            })}
        </div>
    )
}
