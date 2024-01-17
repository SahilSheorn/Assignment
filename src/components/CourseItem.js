import React from 'react';

const CourseItem = ({ course, onCourseClick }) => {
  return (
    <div className="course-item text-center p-4 border cursor-pointer" onClick={() => onCourseClick(course)}>
      <h2 className='font-bold text-xl mb-2 text-amber-100 font-bold font-'>{course.course}</h2>
      <h3 className=' text-xl font-serif' >{course.name}</h3>
      <p className='text-pink-600 italic'>Instructor: <span className=' font-bold'>{course.instructor}</span></p>
    </div>
  );
};

export default CourseItem;
