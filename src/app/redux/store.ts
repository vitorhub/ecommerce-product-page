import { createSlice } from '@reduxjs/toolkit'

const stock = createSlice(
    {
        name: 'stock',
        initialState: {
            counter: 0
        },
        reducers: {
            increment(state){
                state.counter += 1
            },
            decrement(state){
                state.counter -+ 1
            },
            alteraIndice(state) {
                return state.counter // aqui quero que o redux altere o estado
            }
        }
    }
)
export const { decrement, increment, alteraIndice } = stock.actions
export default stock.reducer