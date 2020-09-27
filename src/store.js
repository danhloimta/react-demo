import categoryReducer from './reducers/categoryReducer';
const redux = require('redux');

const allReducers = redux.combineReducers ({
    category: categoryReducer
});

const store1 = redux.createStore(allReducers);

store1.subscribe(() => {
    console.log(JSON.stringify(store1.getState()));
})

export default store1;