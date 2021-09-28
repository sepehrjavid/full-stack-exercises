import React from 'react'

const Feedback = ({goodHandler, badHandler, neutralHandler}) => {
    return (
        <>
            <h2>Give Feedback</h2>
            <button onClick={goodHandler}>good</button>
            <button onClick={neutralHandler}>neutral</button>
            <button onClick={badHandler}>bad</button>
        </>
    )
};

export default Feedback
