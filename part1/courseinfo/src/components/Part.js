import React from 'react'

const Part = (props) => {
    return (
        <>
            <p>{props.item.part} {props.item.exercises}</p>
        </>
    )
};

export default Part
