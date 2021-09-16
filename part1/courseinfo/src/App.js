import React from 'react'
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ];


    return (
        <div>
            <Header name={course}/>
            <Content content={parts}/>
            <Footer count={parts.reduce((prev, cur) => {
                return prev + cur.exercises
            }, 0)}/>
        </div>
    )
};

export default App
