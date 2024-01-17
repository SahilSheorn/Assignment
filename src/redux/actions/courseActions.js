// redux/actions/courseActions.js
import { FETCH_COURSES } from './type';

export const fetchCourses = () => (dispatch) => {
  // Fetch courses from your API or backend here
  // For simplicity, use sample data for now
  const sampleCourses = [
    // Sample course data
  ];

  dispatch({
    type: FETCH_COURSES,
    payload: sampleCourses,
  });
};
