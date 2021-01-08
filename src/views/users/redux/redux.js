const redux = require('redux');
const rootStore = redux.createStore;

const initialState = {
    auth: false,
    name: ''
}
//Reducer
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'AUTH_LOGIN':
            return {
                auth: state.auth = true,
                ...state
            }
        case 'CHANGE_NAME':
            return {
                ...state,
                name: state.name = action.newName
            }
        default:
            return state
    }
}
//Store
const store = rootStore(rootReducer);
console.log(store.getState());

// Dispatching action
store.dispatch({type: 'AUTH_LOGIN'})
store.dispatch({type: 'CHANGE_NAME', newName: 'Muhammad Zaqi'})

console.log(store.getState());