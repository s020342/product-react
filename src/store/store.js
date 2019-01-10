import {createStore} from 'redux'

const defaultState={
   
}

const reducer=(state=defaultState,action)=>{
    const {type,payload}=action;
    switch(type){
        case 'UPDATE':
        console.log({...state,...payload})
        return {...state,...payload}
        default :
        return state
    }
}



const store=createStore(reducer)
export default store;

