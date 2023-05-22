import {createStore , combineReducers } from 'redux'

interface Action {
    name?: string;
    url?: string;
    car?: string;
    type?: string
}

const INITIAL_STATE = [
    {
        name: "BMW",
        url: "url"
    }
]

export function reducerAddCar (state = INITIAL_STATE, action: Action){
    if(action.type === 'ADD_CAR'){ return [ ...state, action.car ] } return state
}
export function reducerLayout (state = INITIAL_STATE, action: Action ){
    if(action.type === 'SHOW_MESSAGE'){ return [ ...state, action.car ] } return state
}

export const addCar = (car: Action) => { return { type: 'ADD_CAR', car }  }

const rootReducer = combineReducers({
    cars: reducerAddCar,
    layout: reducerLayout
})

export default createStore( rootReducer)