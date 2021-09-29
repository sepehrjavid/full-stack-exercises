import React from 'react'

const Statistics = ({goodCount, badCount, neutralCount}) => {
    const totalVotes = badCount + goodCount + neutralCount;
    return (
        <div>
            <h2>Statistics</h2>
            <p>Good: {goodCount}</p>
            <p>Neutral: {neutralCount}</p>
            <p>Bad: {badCount}</p>
            <p>All: {totalVotes}</p>
            <p>Average: {(badCount * -1 + goodCount * 1) / totalVotes}</p>
            <p>Positive: {goodCount / totalVotes}</p>
        </div>
    )
};

export default Statistics
