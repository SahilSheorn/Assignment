
import { FETCH_COURSES } from './type';

export const fetchCourses = () => (dispatch) => {
 
  const sampleCourses = [
    
  ];

  dispatch({
    type: FETCH_COURSES,
    payload: sampleCourses,
  });
};
