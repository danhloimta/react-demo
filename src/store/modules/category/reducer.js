import * as types from './type';

const categoryInitialState = {
    category: {},
    categories: [],
    create: true,
    showForm: false,
}

const categoryReducer = (state = categoryInitialState, action) => {
    switch (action.type) {
        case types.FETCH_CATEGORIES:
            return {...state, categories: action.categories}
        case 'ADD':
            return !state.create
        case 'UPDATE':
            return state
        case 'DELETE':
            return state

        default:
            return state
    }
}

export default categoryReducer;