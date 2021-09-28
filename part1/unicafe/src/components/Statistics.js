import React from 'react'

const Statistics = ({goodCount, badCount, neutralCount}) => {
    return (
        <div>
            <h2>Statistics</h2>
            <p>Good: {goodCount}</p>
            <p>Neutral: {neutralCount}</p>
            <p>Bad: {badCount}</p>
        </div>
    )
};

export default Statistics
