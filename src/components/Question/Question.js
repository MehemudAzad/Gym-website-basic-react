import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='questions'>
            <h1>Questions</h1> 
            <div >
                <h1>How does react work</h1>
            <p>
                React works by using JSX, Virtual Dom, state management, components and props. It is not a framework as it only helps to render in the ui. It gives high performance and also it is seo friendly.
            </p>
            </div>
            <div>
                <h1>Props vs State</h1>
                <article>
                   <p>
                   Props:Props are arguments passed into React components. Props are passed to components via HTML attributes. props stands for properties.
</p> 
                   <p>
                   State:The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.
                   </p>
                </article>
            </div>
            <div>
                <h1>useEffect usage expect api</h1>
                <p>
                    the useEffect() is used for causing side effects in functional components and it is also capable for handling componentDidMount(), componentDidUpdate() and componentWillUnmount() life-cycle methods of class based components into functional component.
                    Besides it usecase in calling api we can use it for directly updating the dom and timers.
                </p>
            </div>
            
        </div>
    );
};

export default Question;