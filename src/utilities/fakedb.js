// use local storage to manage cart data
const addToDb = id =>{
  
    let exerciseCart = {};

    const storedCart = localStorage.getItem('exercise-list');
    if(storedCart){
        exerciseCart = JSON.parse(storedCart);
    }
    // add quantity
    const quantity = exerciseCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        exerciseCart[id] = newQuantity;
    }
    else{
        exerciseCart[id] = 1;
    }
    localStorage.setItem('exercise-list', JSON.stringify(exerciseCart));
}

const getStoreCart  = ()=>{
    let exerciseCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('exercise-list');
    if(storedCart){
        exerciseCart = JSON.parse(storedCart);
    }
    return  exerciseCart;
}
const breakeTimeStorage = (num)=>{
    localStorage.setItem('break-time', JSON.stringify(num));
}

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('exercise-list');
    if(storedCart){
        const exerciseCart = JSON.parse(storedCart);
        if(id in exerciseCart){
            delete exerciseCart[id];
            localStorage.setItem('exercise-list', JSON.stringify(exerciseCart));
        }
    }
}

const deleteExerciseCart = () =>{
    localStorage.removeItem('exercise-list');
}

export {
    addToDb, 
    getStoreCart,
    removeFromDb,
    breakeTimeStorage,
    deleteExerciseCart
}