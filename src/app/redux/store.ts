import {createStore , combineReducers } from 'redux'

interface Action {
    totalbill?: number;
    tip?: number | string;
    npeople?: number;
    tipbyperson?: number;
    totalbyperson?: number;
    type?: string;
}

const INITIAL_STATE = [
    {
        totalbill: 0,
        tip: 0,
    }
]

export function reducerTotalBill (state = INITIAL_STATE, action: Action)
    {   if(action.type === 'TOTAL_BILL'){ return [ ...state, action.totalbill ] } return state   }
export function reducerTip (state = INITIAL_STATE, action: Action)
    {   if(action.type === 'TIP'){ return [ ...state, action.tip ] } return state   }


export const atualizaBill = (totalbill: Action) => {  return { type: 'TOTAL_BILL', totalbill  }  }
export const atualizaTip = (tip: Action) => {  return { type: 'TIP', tip  }  }

const rootReducer = combineReducers({
    totalbill: reducerTotalBill,
    tip: reducerTip,
})
export default createStore( rootReducer )