import allReducers from './rootReducer'
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


const store = createStore(
    allReducers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);

store.subscribe(() => {
    console.log('subscribe store');
    console.log((store.getState()));
})

export default store;