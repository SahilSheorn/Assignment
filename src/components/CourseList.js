import React, { useState } from 'react';
import CourseItem from './CourseItem';
import SearchBar from './SearchBar';
import coursesData from '../data/coursesData';

const CourseList = ({ onCourseClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredCourses = coursesData.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="course-list">
      <h2 className=' font-bold font-sans text-xl text-center pb-6'>Course Listing</h2>
      <SearchBar onSearchChange={setSearchTerm} />
      {filteredCourses.map((course) => (
        <CourseItem key={course.id} course={course} onCourseClick={onCourseClick} />
      ))}
    </div>
  );
};

export default CourseList;
