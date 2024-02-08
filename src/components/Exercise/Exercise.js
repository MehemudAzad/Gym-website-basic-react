import React from 'react';
import './Exercise.css';

const Exercise = ({exerciseTime}) => {
    return (
          <div className='exercise-details'>
                <h3 className=''>Exercise Details</h3>
                <div className='exercise-time'>
                <p>Exercise time</p>
                <p className='exercise-time-count'><span>{exerciseTime}</span> seconds</p>  
              </div> 
        </div>
    );
};

export default Exercise;