import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from './CourseDetails';
const CourseDetailsMap = () => {
    const cores = useLoaderData();

    return (
        <div className=' justify-content-center'>

            {
                cores.map(course => <CourseDetails
                    key={course.id}
                    course={course}
                ></CourseDetails>)
            }


        </div>
    );
};

export default CourseDetailsMap;