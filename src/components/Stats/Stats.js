import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { breakeTimeStorage, getStoreCart } from '../../utilities/fakedb';
import { toast } from '../../utilities/toast';
import Breakpoint from '../Breakpoint/Breakpoint';
import Exercise from '../Exercise/Exercise';
import './Stats.css';



const Stats = ({cart}) => {
//toast displayed
    const toastPop=()=>{
        toast();
    }

    console.log(cart);
    let [breakCount, setBreakCount]= useState(0);
    // cart=getStoreCart();
    const exerciseTime = cart.reduce((prev,current)=>{
        return prev+ current.time;
    },0) 

    const addTen =()=>{
        setBreakCount(10);
        breakeTimeStorage(10);
    }
    const addTwenty =()=>{
        setBreakCount(20)
        breakeTimeStorage(20)
    }
    const addThirty =()=>{
        setBreakCount(30)
        breakeTimeStorage(30)
    }
    const addForty =()=>{
        setBreakCount(40)
        breakeTimeStorage(40)
    }
    const addFifty =()=>{
        setBreakCount(50)
        breakeTimeStorage(50)

    }
    return (
        <div className='stats-container'>
            <div className='personal-info'>
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2861&q=80" alt="hello" />
                <div>
                    <p className='name-stats'>Anna Frank</p>
                    <p className='location-stats'> <FontAwesomeIcon icon={faLocationDot} /> Sydney,Australia</p>
                </div>
            </div>
            <div className='health-info'>
            <div>
                <p> <span>75</span>kg </p>
                <p>weight</p>
            </div>
            <div>
                <p className='height'>6.5 </p>
                <p>Height</p>
            </div>
            <div>
                <p> <span>25</span>yrs </p>
                <p>Age</p>
            </div>
            </div>
            <h3>Add A Break</h3>
            <div className='addtime-container'>
                <p onClick={()=>addTen()}>10</p>
                <p onClick={()=>addTwenty()}>20</p>
                <p onClick={()=>addThirty()}>30</p>
                <p onClick={()=>addForty()}>40</p>
                <p onClick={()=>addFifty()}>50</p>
            </div>
            <div className='exercise-details'>
                
                <Exercise exerciseTime={exerciseTime}></Exercise>
               <Breakpoint breakCount={breakCount}></Breakpoint>
            </div>
            <button onClick={()=>toastPop()}  className='btn-stats'>Actively Completed</button>
        </div>
    );
};

export default Stats;