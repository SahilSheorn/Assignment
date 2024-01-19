import React, { useEffect, useState } from 'react';

const StudentDashboard = ({ enrolledCourses, onCompleteClick }) => {

    const [students, setStudents] = useState();
    const getData = async () => {
        const response = await fetch("https://freetestapi.com/api/v1/students?limit=1");
        const movies = await response.json();
        setStudents(movies);
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="student-dashboard">
            <h2 className=' font-bold font-sans text-xl text-center pb-6'>Student Dashboard</h2>
            <ul>
                {enrolledCourses.map((course) => (
                    <li key={course.id}>
                        <p className='italic text-blue-600 text-xl pb-3 font-bold'>{course.name}</p>
                        <p><span className=' font-bold'>Instructor :</span> {course.instructor}</p>
                        <p><span className=' font-bold'>Due Date :</span> {course.dueDate}</p>
                        {students.map((item, index) => {
                            console.log("items=>", item);
                            return (
                                <>
                                    <div>id: {item.id}</div>
                                    <div>Name: {item.name}</div>
                                    <div>Gender: {item.gender}</div>
                                    <div>Email: {item.email}</div>
                                </>
                            )
                        })}
                        <button className=' hover:scale-110' onClick={() => onCompleteClick(course)}>Mark as Completed</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentDashboard;
