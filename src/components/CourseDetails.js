
import React from 'react';

const CourseDetails = ({ selectedCourse, onEnrollClick }) => {
    if (!selectedCourse) return null;

    return (
        <div className="course-details">
            <p className='btn close'>&times;</p>
            <h2 className=' font-bold font-sans text-xl text-center pb-6'>Course Details</h2>
            <h3 className=' italic text-red-500 text-xl pb-3 font-bold'>{selectedCourse.name}</h3>
            <p><span className=' font-bold font-serif pr-2'>Instructor :</span> {selectedCourse.instructor}</p>
            <p><span className=' font-bold font-serif pr-2'>Description :</span> {selectedCourse.description}</p>
            <p><span className=' font-bold font-serif pr-2'>Enrollment Status :</span> {selectedCourse.enrollmentStatus}</p>
            <p><span className=' font-bold font-serif pr-2'>Duration :</span> {selectedCourse.duration}</p>
            <p><span className=' font-bold font-serif pr-2'>Schedule :</span> {selectedCourse.schedule}</p>
            <p><span className=' font-bold font-serif pr-2'>Location :</span> {selectedCourse.location}</p>
            <p><span className=' font-bold font-serif pr-2'>Prerequisites :</span> {selectedCourse.prerequisites.join(', ')}</p>
            <details>
                <summary className=' italic text-lg'>Syllabus</summary>
                <div className='syllabus-scroll'>
                    <ul>
                        {selectedCourse.syllabus.map((item) => (
                            <li className='pb-3' key={item.week}>
                                <span className=' block'><strong>Week {item.week}:</strong></span>
                                <span className=' font-bold italic'>{item.topic}</span>
                                <ul>
                                    <li>{item.content}</li>
                                    <li>{item.content2}</li>
                                    <li>{item.content3}</li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </details>
            <button className=' hover:scale-110' onClick={() => onEnrollClick(selectedCourse)}>Enroll</button>
        </div>
    );
};

export default CourseDetails;
