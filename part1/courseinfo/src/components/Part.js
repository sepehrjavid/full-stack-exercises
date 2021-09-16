import React from 'react'

const Part = (props) => {
    return (
        <>
            <p>{props.item.name} {props.item.exercises}</p>
        </>
    )
};

export default Part
