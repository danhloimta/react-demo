import categoryReducer from './modules/category/reducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers ({
    categoryReducer
});

export default allReducers;