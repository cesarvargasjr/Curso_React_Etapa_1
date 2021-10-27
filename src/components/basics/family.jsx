import React, { cloneElement } from 'react'

export default function Family(props) {
    return (
        <div>
            {props.children.map((child) => {
                    return cloneElement(child, props);
                })}
        </div>
    );
};