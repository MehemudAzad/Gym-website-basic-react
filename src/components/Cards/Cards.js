import React from 'react';
import './Cards.css'

const Cards = ({exercise,handleAddToList}) => {
    const {name, img,time, age}= exercise;
    // console.log(handleAddToList);
    return (
        <div className='card'>
            <img className='card-img' src={img} alt="" />
            <article>
                <h1>{name}</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum esse velit qui est aperiam? Ducimus!</p>
                <h3>for Age: {age}</h3>
                <h3>Time required: {time}s</h3>
            </article>
            <button onClick={()=>handleAddToList(exercise)} className='btn-card' >Add to list</button>
        </div>
    );
};

export default Cards;