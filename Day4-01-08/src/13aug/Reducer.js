export const initialState={count:0};

export const counterReducer=(state,action)=>{
    if(action.type === 'increment'){
        return {count:state.count+1}
    }else if(action.type ==='decrement'){
        return {count:state.count-1}
    }else if(action.type==='reset'){
        return {count:state.count=1}

    }
}