import {createSlice} from '@reduxjs/toolkit'

const calculatorSlice=createSlice({
    name:"calculator",
    initialState:{
        firstValue:0,
        secondValue:0,
        operator:"+",
        result:0,
    },
    reducers:{
        setFirstValue:(state,action)=>{
            state.firstValue=action.payload;
        },
        setSecondValue:(state,action)=>{
            state.secondValue=action.payload
        },
        setOperator:(state,action)=>{
            state.operator=action.payload
        },
        clear:(state,action)=>{
            state.result=0;
        },
        calculate:(state)=>{
            const first=Number(state.firstValue);
            const second=Number(state.secondValue);
            switch(state.operator){
                case "+":
                    state.result=first+second;
                    break;
                case "-":
                    state.result=first-second;
                    break;
                case "*":
                    state.result=first*second;
                    break; 
                default:
                    state.result=0;  
            }   
        }
    }
})

export const {setFirstValue,setSecondValue,setOperator,calculate,clear} =calculatorSlice.actions;
export default calculatorSlice.reducer;