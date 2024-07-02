import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  // slice for reducer
  name: "counter",
  initialState: { counterval: 0 },
  reducers: {
    increment: (state) => {
      state.counterval++;
    },
    decrement: (state) => {
      state.counterval--;
    },
    add: (state, action) => {
      state.counterval += action.payload.Number;
    },
    substract: (state, action) => {
      console.log(state, action);
    },
  },
});

const counterStore = configureStore({
  // store
  reducer: {
    counter: counterSlice.reducer,
  },
}); // redux store with argument reducer

export const CounterAction = counterSlice.actions;
export default counterStore;

/*

 const INITIAL_VALUE = { // initial value of store
   counter:0,
   privacy:false
 }

 const counterReducer = (store = INITIAL_VALUE , action)=>{  // reducer with initial value and action

if(action.type === "INCREMENT"){  // logic for reducer
    return {...store ,counter : store.counter + 1 }
    }else if(action.type === "DECREMENT"){
      return {...store ,counter : store.counter -1}
      }else if(action.type === "ADD"){
        return {...store ,counter : store.counter + Number(action.payload.Number)}
        }else if(action.type === "SUBSTRACT"){
          return {...store ,counter : store.counter  - Number(action.payload.Number)}
          }else if(action.type === "PRIVACY_TOGGLE"){
            return{...store , privacy : !store.privacy }
  }
  return store
}
*/
