import React from 'react'

const Button = ({text, onClickFunction}) => {
    return (
        <button onClick={onClickFunction}>{text}</button>
    )
};

export default Button
