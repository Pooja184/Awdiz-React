import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../features/cartSlice.js'
import calculatorReducer from '../features/calculator.js'
export const store=configureStore({
    reducer:{
        cart:cartReducer,
        calculator:calculatorReducer
    }
})