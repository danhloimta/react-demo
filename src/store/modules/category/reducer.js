import * as types from './type';

const categoryInitialState = {
    category: {},
    categories: [],
    create: true,
    showForm: false,
}

const categoryReducer = (state = categoryInitialState, action) => {
    let {id, category, categories} = action;
    switch (action.type) {
        case types.FETCH_CATEGORIES:
            return {...state, categories: categories}
        case types.CREATE_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, category],
                category: category
            }
        case 'UPDATE':
            return state
        case 'DELETE':
            return state
        case types.SHOW_FORM:
            return {...state, showForm: !state.showForm}
        default:
            return state
    }
}

export default categoryReducer;