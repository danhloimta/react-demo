import * as types from './type';

const categoryInitialState = {
    category: {},
    categories: [],
    create: true,
    showForm: false,
    categoriesAction: []
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
        case types.PUSH_CATEGORY:
            return handlePushCategory(state, id, action.checked, action.checkAll)
        default:
            return state
    }
}

const handlePushCategory = (state, id, checked, checkAll) => {
    console.log('checkAll', checkAll);
    if (checked && checkAll) {
        let categoryIds = state.categories.map(cate => cate.id);

        return {...state, categoriesAction: categoryIds}
    } else if (!checked && checkAll) {
        return {...state, categoriesAction: []}
    }

    if (checked)  {
        return {...state, categoriesAction: [...state.categoriesAction, id]}
    }

    const index = state.categoriesAction.indexOf(id);

    if (index >= 0) {
        let categoriesAction = [...state.categoriesAction]
        categoriesAction.splice(index, 1)

        return {...state, categoriesAction: categoriesAction}
    }

    return {...state}
}

export default categoryReducer;