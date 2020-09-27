import {
    fetchDataCategory,
    saveCategory,
    updateCategory,
    deleteCategory
} from '../api/apiCategory';

const categoryInitialState = {
    category: {},
    categories: [],
    create: true,
    showForm: false,
}

const categoryReducer = (state = categoryInitialState, action) => {
    switch (action.type) {
        case 'GET_LIST':
            console.log(getListCategory());
            return {...state, categories: getListCategory()}
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

const getListCategory = () => {
    fetchDataCategory()
        .then((res) => {
            return res;
        });

}

export default categoryReducer;