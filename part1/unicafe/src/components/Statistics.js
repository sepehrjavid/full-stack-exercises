import React from 'react'
import StatisticLine from "./StatisticLine";

const Statistics = ({goodCount, badCount, neutralCount}) => {
    const totalVotes = badCount + goodCount + neutralCount;
    if (totalVotes === 0) {
        return (
            <div>
                <h2>Statistics</h2>
                <p>No feedback given yet!</p>
            </div>
        )
    } else {
        return (
            <div>
                <h2>Statistics</h2>
                <StatisticLine text="Good" value={goodCount}/>
                <StatisticLine text="Neutral" value={neutralCount}/>
                <StatisticLine text="Bad" value={badCount}/>
                <StatisticLine text="All" value={totalVotes}/>
                <StatisticLine text="Average" value={(badCount * -1 + goodCount * 1) / totalVotes}/>
                <StatisticLine text="Positive" value={goodCount / totalVotes}/>
            </div>
        )
    }
};

export default Statistics
