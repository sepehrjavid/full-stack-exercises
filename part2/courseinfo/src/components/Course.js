import React from 'react'

const Course = ({course}) => {
    const total = course.parts.map((part) => part.exercises).reduce((number, a) => a + number, 0);

    return (
        <div>
            <h1>{course.name}</h1>
            {course.parts.map((part) => <p key={part.id}>{part.name} {part.exercises}</p>)}
            <b>total of {total} exercises</b>
        </div>
    )
};

export default Course
