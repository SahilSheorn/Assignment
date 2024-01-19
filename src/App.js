import React, { useState } from 'react';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import StudentDashboard from './components/StudentDashboard';

import './App.css';

const App = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    const handleCourseClick = (course) => {
        setSelectedCourse(course);
    };

    const handleEnrollClick = (course) => {
        setEnrolledCourses([...enrolledCourses, course]);
    };

    const handleCompleteClick = (course) => {
        console.log(`Marking ${course.name} as completed`);
    };

    

    return (
        // <div className="container">
            <div className='app-container'>
                <CourseList onCourseClick={handleCourseClick} />
                <CourseDetails selectedCourse={selectedCourse} onEnrollClick={handleEnrollClick} />
                <StudentDashboard enrolledCourses={enrolledCourses} onCompleteClick={handleCompleteClick} />
            </div>
        // </div>
    );
};

export default App;
