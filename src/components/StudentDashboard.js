import React from 'react';

const StudentDashboard = ({ enrolledCourses, onCompleteClick }) => {
  return (
    <div className="student-dashboard">
      <h2 className=' font-bold font-sans text-xl text-center pb-6'>Student Dashboard</h2>
      <ul>
        {enrolledCourses.map((course) => (
          <li key={course.id}>
          <p className='italic text-blue-600 text-xl pb-3 font-bold'>{course.name}</p>
            <p><span className=' font-bold'>Instructor :</span> {course.instructor}</p>
            <p><span className=' font-bold'>Due Date :</span> {course.dueDate}</p>
            <button className=' hover:scale-110' onClick={() => onCompleteClick(course)}>Mark as Completed</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
