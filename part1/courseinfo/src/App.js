import React from 'react'
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
    const course = 'Half Stack application development';
    const part1 = 'Fundamentals of React';
    const exercises1 = 10;
    const part2 = 'Using props to pass data';
    const exercises2 = 7;
    const part3 = 'State of a component';
    const exercises3 = 14;

    return (
        <div>
            <Header name={course}/>
            <Content content={[
                {part: part1, exercises: exercises1},
                {part: part2, exercises: exercises2},
                {part: part3, exercises: exercises3}
            ]}/>
            <Footer count={exercises1 + exercises2 + exercises3}/>
        </div>
    )
};

export default App