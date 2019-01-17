import {createStore} from 'redux'

const defaultState={
   list:[],
   arr:[]
}

const reducer=(state=defaultState,action)=>{
    const {type,payload}=action;
    switch(type){
        case 'UPDATA':
        return {...state,list:[...payload]}
        case 'ADD':
        return {...state,arr:[...payload]}
        default :
        return state
    }
}



const store=createStore(reducer)
export default store;

