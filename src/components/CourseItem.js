import React from 'react';

const CourseItem = ({ course, onCourseClick }) => {
    return (
        <div className="course-item text-center p-4 border cursor-pointer" onClick={() => onCourseClick(course)}>
            <h2 className='font-bold text-3xl mb-2 text-amber-100 font-bold font-'>{course.course}</h2>
            <p className=' flex justify-center'><img src={course.thumbnail} alt='not found' className=' w-4/5'></img></p>
            <h3 className=' text-xl font-serif' >{course.name}</h3>
            <p className='text-pink-600 italic'>Instructor: <span className=' font-bold'>{course.instructor}</span></p>
        </div>
    );
};

export default CourseItem;
