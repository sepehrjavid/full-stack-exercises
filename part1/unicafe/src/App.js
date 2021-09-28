import React, {useState} from 'react'
import Statistics from "./components/Statistics";
import Feedback from "./components/Feedback";

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <Feedback
                goodHandler={() => setGood(good + 1)}
                badHandler={() => {setBad(bad + 1)}}
                neutralHandler={() => {setNeutral(neutral + 1)
            }}/>
            <Statistics badCount={bad} goodCount={good} neutralCount={neutral}/>
        </div>
    )
};

export default App
