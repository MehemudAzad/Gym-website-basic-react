import React from 'react';
import './Breakpoint.css'

const Breakpoint = ({breakCount}) => {
    return (
        <div>
             <div className='break-time'>
                <p>Break time</p>
                <p className='break-time-count'><span>{breakCount}</span> seconds</p>
                </div>
        </div>
    );
};

export default Breakpoint;