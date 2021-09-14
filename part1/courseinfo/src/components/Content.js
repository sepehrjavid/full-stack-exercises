import React from 'react'
import Part from './Part'

const Content = (props) => {
    return (
        <>
            <Part item={props.content[0]}/>
            <Part item={props.content[1]}/>
            <Part item={props.content[2]}/>
        </>
    )
};

export default Content
