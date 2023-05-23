import {createStore , combineReducers } from 'redux'

interface Action {
    number_image?:number;
    name?: string;
    url?: string;
    car?: string;
    type?: string
}

const INITIAL_STATE = [
    {
        number_image: 0,
        name: "BMW",
        url: "url"
    }
]

export function reducerAddCar (state = INITIAL_STATE, action: Action){
    if(action.type === 'ADD_CAR'){ return [ ...state, action.number_image ] } return state
}

export const addCar = (number_image: Action) => { return { type: 'ADD_CAR', number_image }  }

const rootReducer = combineReducers({
    estados: reducerAddCar,
//  layout: reducerLayout
})

export default createStore( rootReducer)