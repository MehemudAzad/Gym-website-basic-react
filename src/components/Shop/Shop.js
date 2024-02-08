import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Stats from '../Stats/Stats';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import "./Shop.css";
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Question from '../Question/Question';

const Shop = () => {
    const [exercises, setExercises] = useState([]);
    const [cart, setCart]= useState([]);

   
    const handleAddToList =(selectedExercise)=>{
        // console.log(exercise);
        let newCart = [...cart, selectedExercise];
        const exists = cart.find(exercise => exercise.id === selectedExercise.id);
        if(!exists){
            selectedExercise.quantity = 1;
            newCart = [...cart, selectedExercise];
        }
        else{
            const rest = cart.filter(exercise => exercise.id !== selectedExercise.id);
            exists.quantity = exists.quantity + 1 ;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedExercise.id);
    }

    useEffect(()=>{
        fetch('Exercise.json')
        .then(res => res.json())
        .then(data => setExercises(data));
    },[])

    useEffect(()=>{
        const storedCart = getStoreCart();
        console.log(storedCart);
        const savedCart=[];
        for(const id in storedCart){
            const addedExercise = exercises.find(exercise => exercise.id ===id);
            if(addedExercise){
                const quantity = storedCart[id];
                addedExercise.quantity = quantity;
                savedCart.push(addedExercise);
                 addedExercise.time = quantity* addedExercise.time;
                // console.log(addedProduct)
            }
            // console.log(id)
        }
        setCart(savedCart);
    },[exercises])

    return (
        <div className='club-container'>
            
            <div className='card-container'>
                <h1><FontAwesomeIcon icon={faDumbbell} /> The Gymnasium</h1>
                <h3>Select today's exercise</h3>
                <div className='cards'>
                {
                    exercises.map(exercise =>
                        <Cards
                        key={exercise.id}
                        exercise={exercise}
                        handleAddToList={()=>handleAddToList(exercise)}
                       >
                        </Cards>
                    )
                }
                </div>
                   <Question></Question>
                
            </div>
            <div className='stats-container'>  
                <Stats cart={cart}></Stats>
            </div>

        </div>
    );
};

export default Shop;