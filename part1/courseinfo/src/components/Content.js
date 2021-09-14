import React from 'react'

const Content = (props) => {
    return (
        <>
            <p>
                {props.content[0].part} {props.content[0].exercises}
            </p>
            <p>
                {props.content[1].part} {props.content[1].exercises}
            </p>
            <p>
                {props.content[2].part} {props.content[2].exercises}
            </p>
        </>
    )
};

export default Content
