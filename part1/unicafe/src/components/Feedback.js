import React from 'react'
import Button from "./Button";

const Feedback = ({goodHandler, badHandler, neutralHandler}) => {
    return (
        <div>
            <h2>Give Feedback</h2>
            <Button text="good" onClickFunction={goodHandler}/>
            <Button text="neutral" onClickFunction={neutralHandler}/>
            <Button text="bad" onClickFunction={badHandler}/>
        </div>
    )
};

export default Feedback
